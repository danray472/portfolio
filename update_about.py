import re

with open(r'd:\projects\portfolio\src\components\About.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace using a more flexible approach
marker = "developer with a solid foundation"
if marker in content:
    # Find the start position
    start_idx = content.find(marker)
    # Find the end (look for the closing </p> after the text)
    end_idx = content.find("</p>", start_idx)
    
    # Extract the old section
    old_section = content[start_idx:end_idx]
    
    new_section = """developer with a solid foundation in software engineering and a deep passion for turning complex ideas into functional, high-quality, and secure applications. My journey started at Zetech University, building code fundamentals, and has since expanded into the realms of cloud architecture and robust application security (AppSec) through continuous hands-on engineering.
  <br/><br/>
  I specialize in building modern web and mobile apps using tools like React, Next.js, and React Native, always engineering with a security-first and cloud-optimized mindset. I bridge front-end user experiences with resilient, hardened backend logic, ensuring that the software I deliver is both highly scalable and protected against modern web vulnerabilities.
  <br/><br/>
  I've contributed to diverse projects for clients and personal ventures, thriving in collaborative environments where performance, cloud scalability, and defensive coding are prioritized. If you're looking for a motivated developer ready to design, deploy, and secure next-generation applications—let's build something great together."""
    
    content = content[:start_idx] + new_section + content[end_idx:]
    
    with open(r'd:\projects\portfolio\src\components\About.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("About section updated successfully!")
else:
    print("Marker not found in file")
