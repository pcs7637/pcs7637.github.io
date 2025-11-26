import re

# Read the markdown file
with open('MEDICAL_AI_JOURNEY.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# Fix image paths
md_content = md_content.replace('daughter_cellulitis_1.jpg', '/assets/daughter_cellulitis_1.jpg')
md_content = md_content.replace('daughter_cellulitis_2.jpg', '/assets/daughter_cellulitis_2.jpg')
md_content = md_content.replace('lab_report.jpg', '/assets/lab_report.jpg')
md_content = md_content.replace('konyang_biomedical_ai_program.png', '/assets/konyang_biomedical_ai_program.png')

# Escape backticks in the content
md_content_escaped = md_content.replace('`', '\\`').replace('${', '\\${')

# Read the existing Journey.jsx to get the component structure
with open('src/pages/Journey.jsx', 'r', encoding='utf-8') as f:
    journey_content = f.read()

# Extract the component part (everything after the journeyContent constant)
component_part = journey_content.split('export default function Journey({ onBack }) {')[1]

# Create new file content
new_content = f'''import {{ motion }} from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const journeyContent = `{md_content_escaped}`

export default function Journey({{ onBack }}) {{
{component_part}'''

# Write the new file
with open('src/pages/Journey.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Journey.jsx updated with full content!")
