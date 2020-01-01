# quora-tools
Just a GitHub spot for my Puppeteer script that automates the tedium of looking up OP activity.  
Puppeteer with all required dependencies is needed to run it (luckily it all comes in a single
bundle downloadable package.

quora-question-summary.js 

A script that takes a question's URL (for now just the bare URL).  When run, it looks at the log to find out who asked the 
question and then reports a brief breakdown of how many questions, answers, comments, and topic additions the OP has 
contributed to Quora.  Quora only reports edit histories in small chunks that require scrolling down to get more.  This 
initial release is thus mostly suitable only for new questions with few or no answers.

Anyone who's been on Quora.com for any significant amount of time has seen the amount of havoc Quora Partner Program (QPP)
has caused.  There are some Partners who actively participate in answering questions, commenting, sharing, and generally 
improving the site as a whole while making some money for asking questions that generate good answers that drive traffic 
and advertising revenue for Quora.  On the other hand, Quora's overly promiscuous policies towards Partners have bred 
hundreds of folks churning out thousands of junk questions with impunity, flooding writers' feeds with junk like 
"What makes wheels round?", all around trollbait, and the like.  As such, many writers like myself resorted to screening
questions and muteblocking all Partners whose profiles show thousands of questions with few or no other contributions 
elsewhere.  That is until some partners figured out that they can "unfollow" their own junk to manipulate the stats reported
on the main profile page.

Here's a terminal output cut'n'paste from testing earlier today (I'm still tweaking the scroll-slurp function to make it 
pull a decent amount of data without making the script too slow to run):

[root@localhost ~]# node quora-edit-summary.js https://www.quora.com/What-is-the-past-tense-for-the-word-past
Trying to open question log at https://www.quora.com/What-is-the-past-tense-for-the-word-past/log
Finished opening question log page.
Scrolling to bottom to find out who's asking
Profile link:  /profile/Bitrus-David-1
Opening OP edit log from https://www.quora.com/profile/Bitrus-David-1/log
Log opened.  Scrolling down.
End of log returned by Quora
Topics Added:  610
Questions Added:  28
Answers Added:  0
Comments Added:  0
[root@localhost ~]# node quora-edit-summary.js https://www.quora.com/unanswered/When-is-it-worth-the-cost-to-add-tint-to-your-car-glass-to-block-UV-rays
Trying to open question log at https://www.quora.com/unanswered/When-is-it-worth-the-cost-to-add-tint-to-your-car-glass-to-block-UV-rays/log
Finished opening question log page.
Scrolling to bottom to find out who's asking
Profile link:  /profile/George-Burks
Opening OP edit log from https://www.quora.com/profile/George-Burks/log
Log opened.  Scrolling down.
End of log returned by Quora
Topics Added:  66
Questions Added:  45
Answers Added:  46
Comments Added:  16
[root@localhost ~]# 
[root@localhost ~]# node quora-edit-summary.js https://www.quora.com/What-is-the-past-tense-for-the-word-past
Trying to open question log at https://www.quora.com/What-is-the-past-tense-for-the-word-past/log
Finished opening question log page.
Scrolling to bottom to find out who's asking
Profile link:  /profile/Bitrus-David-1
Opening OP edit log from https://www.quora.com/profile/Bitrus-David-1/log
Log opened.  Scrolling down.
End of log returned by Quora
Topics Added:  318
Questions Added:  1
Answers Added:  0
Comments Added:  0
[root@localhost ~]# 
[root@localhost ~]# node quora-edit-summary.js https://www.quora.com/What-is-the-strangest-reproductive-problem-that-animals-face
Trying to open question log at https://www.quora.com/What-is-the-strangest-reproductive-problem-that-animals-face/log
Finished opening question log page.
Scrolling to bottom to find out who's asking
Profile link:  /profile/Sean-Kernan
Opening OP edit log from https://www.quora.com/profile/Sean-Kernan/log
Log opened.  Scrolling down.
End of log returned by Quora
Topics Added:  44
Questions Added:  28
Answers Added:  20
Comments Added:  76
[root@localhost ~]# node quora-edit-summary.js https://www.quora.com/Why-does-the-emergency-heat-light-come-on-when-it-is-not-very-cold-outside-and-the-thermostat-reads-at-the-same-temperature-it-is-set-to-Also-it-does-not-make-the-outside-unit-run
Trying to open question log at https://www.quora.com/Why-does-the-emergency-heat-light-come-on-when-it-is-not-very-cold-outside-and-the-thermostat-reads-at-the-same-temperature-it-is-set-to-Also-it-does-not-make-the-outside-unit-run/log
Finished opening question log page.
Scrolling to bottom to find out who's asking
Profile link:  /profile/Jen-Holt-2
Opening OP edit log from https://www.quora.com/profile/Jen-Holt-2/log
Log opened.  Scrolling down.
End of log returned by Quora
Topics Added:  123
Questions Added:  54
Answers Added:  5
Comments Added:  56
[root@localhost ~]# 
