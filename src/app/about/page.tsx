import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Markdown from "react-markdown";

const content = `# About Me


Here is a concise response about interviewing doctors in Zimbabwe for health tips and blogging about it on the ZimDoc Health Tips blog:
As a health blogger for the ZimDoc Health Tips blog, I have the privilege of interviewing doctors across Zimbabwe to share their expert medical advice with our readers. Through these insightful conversations, I aim to provide our subscribers with practical, evidence-based health tips they can apply in their daily lives.
In my recent interview with Dr. Tendai Mupfumira, a general practitioner in Harare, she emphasized the importance of maintaining a balanced diet rich in fruits, vegetables, and whole grains to support overall wellbeing. Dr. Mupfumira also stressed the need for regular exercise, even if it's just a 30-minute walk each day, to improve cardiovascular health and manage chronic conditions like diabetes and hypertension.
Another doctor I spoke with, Dr. Chipo Nyathi from Bulawayo, discussed the growing prevalence of mental health issues in Zimbabwe and advised our readers on effective stress management techniques, such as mindfulness meditation and seeking professional counseling when needed. She noted that destigmatizing mental health is crucial for encouraging more people to prioritize their emotional wellbeing.
By sharing these insights from Zimbabwe's medical experts, the ZimDoc Health Tips blog aims to empower our readers to take a proactive approach to their health. I encourage everyone to subscribe to our blog and stay tuned for more valuable tips that can help you and your loved ones live healthier, happier lives



Love,

Tinashe`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Tinashe and the  health blog ",
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
