import re
import csv
import requests

html = requests.get('https://tieba.baidu.com/p/8998043477',timeout=3)

# fetch html content and save file
with open('tieba_demo.html','w+', encoding="UTF-8") as f:
    source_code = html.text # or html.content.decode()
    f.write(source_code)
    
result_list = []
comment_block_list = re.findall('class="l_post l_post_bright j_l_post clearfix  "(.*?)p_props_tail props_appraise_wrap', source_code, re.S)

for i, _ in enumerate(comment_block_list):
    result_list.append({
        'username': re.findall('class="p_author_name j_user_card.+?>(.*?)<', _,re.S)[0].strip(),
        'content': re.findall('class="d_post_content j_d_post_content.+?>(.*?)<', _, re.S)[0].strip(),
        'reply_time': re.findall('class="tail-info">(20.+?)<', _, re.S)[0].strip(),
    })

with open('tieba_demo.csv', 'w+', encoding='UTF-8') as f:
    writer = csv.DictWriter(f, fieldnames=['username', 'content', 'reply_time'])
    writer.writeheader()
    writer.writerows(result_list)