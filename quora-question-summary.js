const puppeteer = require('puppeteer');

const questionURL = process.argv[2] + "/log";

console.log("Trying to open question log at " + questionURL );
(async() => {
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
const page = await browser.newPage();
await page.goto(questionURL, {waitUntil: 'networkidle2'});
await page.setViewport({
        width: 1200,
        height: 800
    });

console.log("Finished opening question log page.");
console.log("Scrolling to bottom to find out who's asking");
await autoScroll(page);
const questionAddLogOpHandle = await page.$('.AddQuestionOperationView');
const profileLink = await questionAddLogOpHandle.$eval('a', a => a.getAttribute('href'));
console.log("Profile link:  " + profileLink);
const profileEditLogUrl = 'https://www.quora.com' + profileLink + '/log';

console.log("Opening OP edit log from " + profileEditLogUrl);
await page.goto(profileEditLogUrl, {waitUntil: 'networkidle2'});

console.log("Log opened.  Scrolling down.");
await autoScroll(page);
console.log("End of log returned by Quora");
//await page.pdf({path: 'page.pdf'});
//const logs = await page.$eval('.layout_3col_center', el => el.innerText );
//console.log(logs);

const topicCount = await page.$$eval('.AddQuestionTopicOperationView', divs => divs.length);
console.log("Topics Added:  " + topicCount);

const questionCount = await page.$$eval('.AddQuestionOperationView', divs => divs.length);
console.log("Questions Added:  " + questionCount);

const answerCount = await page.$$eval('.AttachAnswerOperationView', divs => divs.length);
console.log("Answers Added:  " + answerCount);

const commentCount = await page.$$eval('.CommentOperationView', divs => divs.length);
console.log("Comments Added:  " + commentCount);

await browser.close();
})();


async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 800;
            var scrollCnt = 0;
            var maxScroll = 50;//no more than 10 scrolls
            var waitDelay = 2000;

            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                scrollCnt += 1;

                if(totalHeight >= scrollHeight || scrollCnt >= maxScroll){
                    clearInterval(timer);
                    resolve();
                }

            }, waitDelay);
        });
    });
}
