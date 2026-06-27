$lines = Get-Content 'C:\Users\pc\.gemini\antigravity-ide\brain\bdd2f642-1c36-4a0d-9374-36aca5b3883d\.system_generated\logs\transcript.jsonl'
$json = $lines[27] | ConvertFrom-Json
$json.content | Out-File -FilePath 'e:\coding\projects\Food-Shop\original_html_temp.txt' -Encoding utf8
