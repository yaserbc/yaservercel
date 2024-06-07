import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
 return (
   <main className={styles.main}>
     <div className={styles.center}>
         <p>
           Hello from Yaser!
         </p>


     </div>
     <div className={styles.center}>
       <p>
     <br/> ANSWER 1:
      <br/> 5 Most favourite support task:
      <p>
      <br/> 1.Work with engineering teams during incidents and provide updates to internal and external stakeholders
      <br/> 2.Work with 3rd party partners to track down a tricky situation for a joint customer
      <br/> 3.Analyze hundreds of support tickets to spot trends the product team can use
      <br/> 4. Identify, file (and, where possible, resolve) bugs in private and public Vercel Next.js repos on GitHub
      <br/> 5.Work with people to figure out if Vercel is suitable for their use case
      </p>
      <p>
      <br/> 5 least favourite support task:
      <p>
      <br/> 1.Help resolve billing issues for customers
      <br/> 2.Create video tutorials to help teach users a specific feature or use case
      <br/> 3.Find and recruit teammates for the support team
      <br/> 4. Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites
      <br/> 5.Manage a support team
      </p>
      </p>
      <br/> ANSWER 2: What I wanted to learn or do more of at work is to get to know my colleagues better. I wanted to build relationship
     to as many as I could because I know that it will help me with my work.
     <br/> ANSWER 3: I was running a change which was handed over from a different region. The case is a very long pending case..
    Because I was new, I wasn't familiar with some hiccups that may happen.
      So, as I was running the script from the UI, the page just froze up and went on a blank screen. I wasn't sure if the script
      ran successfully and I couldn't re-run it as it would mess up the system. Then I thought of checking the localhost logs. From there,
      I was able to see that the script was still running and I just need to monitor it from the logs instead.
      <br/> ANSWER 4:Based on what I understand,  choose Edge Functions for lightweight tasks that need to run close to the user, Serverless Functions for more complex backend logic, and Edge Middleware for enhancing performance and security.
      <br/> ANSWER 5:Ask specific questions like where exactly are they encountering the issue, their environment details and steps to reproduce. It will be easier to investigate if you get as many details as you can and if you can reproduce the issue in house.
      <br/> ANSWER 6:I understand your frustration, and I'm here to help. While it's tempting to assume it's a platform issue, it's important for us to thoroughly investigate the problem to ensure we address the root cause effectively. By gathering more information and troubleshooting together, we can increase our chances of finding a solution that works for you. I will also engage our internal teams for another set of eyes to help with the resolution. Can you please provide any additional details or logs related to the issue? With your collaboration, we'll work towards resolving this as swiftly as possible.
      <br/> ANSWER 7:Hi, if you're utilizing a web server such as Apache or Nginx, you can accomplish redirects by integrating a redirect directive into the configuration file. For instance, within Apache's .htaccess file, you can implement the following rule: ewriteEngine On RewriteRule ^blog(.*)$ https://example.com$1 [R=301,L]. This directive will automatically redirect any requests to '/blog' and its subdirectories to 'https://example.com'.
      <br/> ANSWER 8:Hi, To prevent search engines from indexing your website, you can follow these steps:
Robots.txt File: Generate a robots.txt file and store it in your website's main directory. Within this file, you can outline which sections of your site should be excluded from search engine indexing. For instance, to block all search engine crawlers from indexing your entire site, you can incorporate the following instruction:
User-agent: * Disallow: /
      <br/> ANSWER 9:Not sure since I haven’t used Vercel yet until now.
      <br/> ANSWER 10:This is my first time performing this exercise but it would help if the time limit is longer since some applicants are not yet familiar with the Vercel application.
     
      </p>
     </div>


     <div className={styles.center}>
     <a
           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
           target="_blank"
           rel="noopener noreferrer"
         >
           By{' '}
     <Image
       src="/vercel.svg"
       alt="Vercel Logo"
       className={styles.vercelLogo}
       width={100}
       height={24}
       priority
       />
       </a>
     </div>
   </main>
 )
}
