import os
import openai
import requests

openai.api_key = os.getenv("OPENAI_API_KEY")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
REPO = os.getenv("GITHUB_REPOSITORY")
PR_NUMBER = os.getenv("GITHUB_REF").split("/")[-1]

HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def get_pr_diff():
    url = f"https://api.github.com/repos/{REPO}/pulls/{PR_NUMBER}/files"
    resp = requests.get(url, headers=HEADERS)
    files = resp.json()
    python_diffs = ""

    for file in files:
        if file["filename"].endswith(".py") and "patch" in file:
            python_diffs += f"File: {file['filename']}\n{file['patch']}\n\n"
    return python_diffs

def ask_ai_for_review(diff_text):
    prompt = f"Review the following Python code diff for bugs, code smells, and poor practices. Suggest improvements:\n\n{diff_text}"

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a senior Python code reviewer."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3,
        max_tokens=1000
    )
    return response['choices'][0]['message']['content']

def post_comment(body):
    comment_url = f"https://api.github.com/repos/{REPO}/issues/{PR_NUMBER}/comments"
    requests.post(comment_url, headers=HEADERS, json={"body": f"🤖 **AI Code Review Feedback:**\n\n{body}"})

def main():
    diff_text = get_pr_diff()
    if not diff_text:
        print("No Python changes to review.")
        return

    review = ask_ai_for_review(diff_text)
    post_comment(review)
    print("Review posted.")

if __name__ == "__main__":
    main()
