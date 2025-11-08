'use client';

import { useState } from 'react';
import './globals.css';

const slides = [
  {
    id: 1,
    title: "AI as a Service (AIaaS): Revolutionizing Businesses with Cloud-Based Artificial Intelligence",
    subtitle: "Presented by [Your Name], Department of [Dept Name], [College Name]",
    content: null,
    notes: "Good morning everyone. My name is [Your Name] and today I'm excited to talk about AI as a Service, or AIaaS. This revolutionary technology is transforming how businesses leverage artificial intelligence without massive infrastructure investments. Over the next 15-20 minutes, we'll explore how it works and why it's shaping the future of business technology.",
    type: "title"
  },
  {
    id: 2,
    title: "Agenda",
    subtitle: "What We'll Cover Today",
    content: [
      "Introduction to AIaaS",
      "Need for AIaaS",
      "Architecture & Components",
      "Types of AIaaS",
      "Major Service Providers",
      "Real-World Applications",
      "Case Study",
      "Benefits & Challenges",
      "Security Considerations",
      "Cost Analysis",
      "Comparison with Traditional AI",
      "Integration Strategies",
      "Future Trends",
      "Ethical Considerations",
      "Conclusion"
    ],
    notes: "Here's what I'll cover in this presentation. We'll start with the fundamentals of AIaaS, examine its architecture, explore different types and providers, look at real applications through a case study, discuss both benefits and challenges, and finally peek into the future of this technology.",
    type: "list"
  },
  {
    id: 3,
    title: "What is AI as a Service (AIaaS)?",
    subtitle: "Cloud-Based Intelligence at Your Fingertips",
    content: [
      "AIaaS is the delivery of AI capabilities through cloud platforms",
      "Pay-as-you-go model for AI tools and algorithms",
      "No need for expensive infrastructure or deep AI expertise",
      "Access to pre-trained models, APIs, and development frameworks",
      "Enables businesses of all sizes to leverage AI technology"
    ],
    notes: "AI as a Service, or AIaaS, is essentially artificial intelligence delivered through cloud computing platforms. Think of it like Netflix for AI - instead of building your own massive AI infrastructure, you subscribe to services that provide AI capabilities on-demand. This democratizes AI by making it accessible to companies without requiring millions in infrastructure investment or teams of AI PhDs.",
    type: "list"
  },
  {
    id: 4,
    title: "The Need for AIaaS",
    subtitle: "Why Traditional AI Implementation Falls Short",
    content: [
      "💰 High Infrastructure Costs: Building AI systems requires expensive GPUs and servers",
      "👥 Talent Shortage: Skilled AI engineers are rare and costly",
      "⏱️ Time-to-Market: Traditional AI projects take months or years",
      "🔧 Maintenance Burden: Constant updates, scaling, and optimization needed",
      "📊 Data Requirements: Need massive datasets to train models from scratch"
    ],
    notes: "Why do we need AIaaS? Traditional AI implementation faces five major barriers. First, the infrastructure costs are astronomical - high-end GPUs can cost hundreds of thousands of dollars. Second, there's a severe shortage of AI talent globally. Third, building AI from scratch takes months or years, while AIaaS can be deployed in days. Fourth, maintaining and scaling AI systems requires dedicated teams. Finally, training AI models requires massive datasets that most companies don't have. AIaaS solves all these problems.",
    type: "bullets"
  },
  {
    id: 5,
    title: "AIaaS Architecture",
    subtitle: "How the System Works",
    content: [
      "Layer 1: Cloud Infrastructure (AWS, Azure, GCP)",
      "Layer 2: AI/ML Frameworks (TensorFlow, PyTorch, Scikit-learn)",
      "Layer 3: Pre-trained Models & APIs",
      "Layer 4: Application Interface (REST APIs, SDKs)",
      "Layer 5: User Applications & Integration"
    ],
    notes: "The AIaaS architecture consists of five layers working together. At the bottom is cloud infrastructure from providers like AWS, Azure, or Google Cloud. Above that are AI frameworks like TensorFlow and PyTorch. The third layer contains pre-trained models ready for use. The fourth layer provides APIs and SDKs for developers to interact with these models. Finally, at the top are the actual user applications integrating AI capabilities. This layered approach allows for flexibility and scalability.",
    type: "list"
  },
  {
    id: 6,
    title: "Core Components of AIaaS",
    subtitle: "Building Blocks of Cloud AI",
    content: [
      "🤖 Machine Learning Models: Classification, regression, clustering",
      "💬 Natural Language Processing: Text analysis, translation, chatbots",
      "👁️ Computer Vision: Image recognition, object detection, facial analysis",
      "🗣️ Speech Services: Speech-to-text, text-to-speech, voice recognition",
      "🧠 Cognitive Services: Decision-making, recommendation engines",
      "📊 Data Analytics: Predictive analytics, anomaly detection"
    ],
    notes: "AIaaS platforms offer six core components. Machine learning models handle tasks like classification and prediction. NLP services process human language for chatbots and translation. Computer vision analyzes images and videos. Speech services convert between voice and text. Cognitive services help with complex decision-making and recommendations. Finally, analytics services find patterns and anomalies in data. Most AIaaS platforms offer combinations of these components.",
    type: "bullets"
  },
  {
    id: 7,
    title: "Types of AIaaS Offerings",
    subtitle: "Different Service Models",
    content: [
      "Bot Services: Chatbots and conversational AI platforms",
      "API Services: Pre-built AI capabilities via REST APIs",
      "ML Frameworks: Tools for building custom models (SageMaker, Azure ML)",
      "Fully Managed Services: Complete AI solutions (AutoML, Vision AI)",
      "Industry-Specific AI: Healthcare, finance, retail specialized solutions"
    ],
    notes: "AIaaS comes in several flavors. Bot services let you build conversational interfaces quickly. API services provide pre-built AI capabilities you can call with a few lines of code. ML frameworks give data scientists tools to build custom models without managing infrastructure. Fully managed services like AutoML handle the entire process from data to deployment. Finally, some providers offer industry-specific solutions tailored for healthcare, finance, or retail sectors.",
    type: "list"
  },
  {
    id: 8,
    title: "Major AIaaS Providers",
    subtitle: "The Big Players in Cloud AI",
    content: [
      "Amazon Web Services (AWS): SageMaker, Rekognition, Comprehend, Lex",
      "Microsoft Azure: Azure ML, Cognitive Services, Bot Framework",
      "Google Cloud: Vertex AI, Vision API, Natural Language API, DialogFlow",
      "IBM Watson: Watson Studio, Watson Assistant, Discovery",
      "Others: Salesforce Einstein, Oracle AI, Alibaba Cloud AI"
    ],
    notes: "The AIaaS market is dominated by major cloud providers. AWS offers a comprehensive suite including SageMaker for ML, Rekognition for vision, and Lex for chatbots. Microsoft Azure provides Azure ML and Cognitive Services. Google Cloud has Vertex AI as its unified platform. IBM Watson is known for enterprise AI solutions. Several other players like Salesforce, Oracle, and Alibaba also compete in this space, each with unique strengths in different industries.",
    type: "list"
  },
  {
    id: 9,
    title: "Real-World Applications",
    subtitle: "AIaaS in Action Across Industries",
    content: [
      "🏥 Healthcare: Diagnosis assistance, drug discovery, patient monitoring",
      "🏦 Finance: Fraud detection, risk assessment, algorithmic trading",
      "🛒 Retail: Personalized recommendations, inventory optimization, visual search",
      "🏭 Manufacturing: Predictive maintenance, quality control, supply chain optimization",
      "🚗 Transportation: Route optimization, autonomous vehicles, demand forecasting",
      "📱 Technology: Voice assistants, content moderation, spam filtering"
    ],
    notes: "AIaaS is transforming every major industry. In healthcare, it helps doctors diagnose diseases and discover new drugs. Financial institutions use it to detect fraud and assess risk in real-time. Retailers provide personalized shopping experiences and optimize inventory. Manufacturers predict equipment failures before they happen. Transportation companies optimize routes and forecast demand. Tech companies use it for voice assistants and content moderation. The applications are virtually limitless.",
    type: "bullets"
  },
  {
    id: 10,
    title: "Case Study: Netflix Recommendation Engine",
    subtitle: "AIaaS Powering Personalization at Scale",
    content: [
      "Challenge: Recommend content to 230M+ users with diverse preferences",
      "Solution: ML models on AWS analyzing viewing patterns, ratings, behavior",
      "Technology: Collaborative filtering, deep learning, reinforcement learning",
      "Results: 80% of watched content comes from recommendations",
      "Impact: Saves $1B annually in customer retention"
    ],
    notes: "Let's look at Netflix as a concrete example. Netflix faced the challenge of recommending relevant content to over 230 million users with vastly different preferences. They built their recommendation system using AWS machine learning services, analyzing billions of data points including viewing history, ratings, and user behavior. Using collaborative filtering and deep learning models, they achieve remarkable results - 80% of content watched on Netflix comes from recommendations. This personalization saves them an estimated one billion dollars annually by reducing customer churn.",
    type: "list"
  },
  {
    id: 11,
    title: "Key Benefits of AIaaS",
    subtitle: "Why Organizations Choose Cloud AI",
    content: [
      "💵 Cost-Effective: Pay only for what you use, no upfront investment",
      "⚡ Rapid Deployment: Launch AI solutions in days, not months",
      "📈 Scalability: Automatically scale based on demand",
      "🔄 Continuous Updates: Providers improve models regularly",
      "🎯 Focus on Core Business: No need to manage infrastructure",
      "🌍 Global Accessibility: Access AI from anywhere with internet"
    ],
    notes: "The benefits of AIaaS are compelling. First, it's cost-effective with pay-as-you-go pricing and no upfront investment. Second, you can deploy AI solutions in days versus months with traditional approaches. Third, it scales automatically as your needs grow. Fourth, providers continuously update and improve their models - you benefit without any effort. Fifth, you can focus on your core business instead of managing AI infrastructure. Finally, these services are globally accessible from anywhere with an internet connection.",
    type: "bullets"
  },
  {
    id: 12,
    title: "Challenges and Limitations",
    subtitle: "What to Watch Out For",
    content: [
      "🔐 Data Privacy: Sensitive data sent to third-party servers",
      "🔗 Vendor Lock-in: Difficult to switch providers once integrated",
      "🌐 Internet Dependency: Requires reliable connectivity",
      "⚙️ Limited Customization: Pre-built models may not fit all needs",
      "💰 Unpredictable Costs: Usage-based pricing can escalate",
      "⚖️ Compliance: Regulatory requirements may restrict cloud usage"
    ],
    notes: "However, AIaaS isn't without challenges. Data privacy is a major concern - you're sending potentially sensitive data to third-party servers. Vendor lock-in can make it difficult to switch providers once you're integrated. These services require constant internet connectivity. Pre-built models may not perfectly fit your specific use case. Usage-based pricing, while flexible, can become unpredictable and expensive at scale. Finally, regulatory compliance requirements in industries like healthcare or finance may restrict cloud usage. Organizations must carefully weigh these factors.",
    type: "bullets"
  },
  {
    id: 13,
    title: "Security Considerations",
    subtitle: "Protecting Your AI and Data",
    content: [
      "🔒 Data Encryption: In-transit and at-rest encryption",
      "🛡️ Access Control: IAM policies and role-based access",
      "📋 Compliance: SOC 2, HIPAA, GDPR certifications",
      "🔍 Monitoring: Audit logs and anomaly detection",
      "🔑 API Security: Authentication tokens, rate limiting"
    ],
    notes: "Security is paramount in AIaaS. All major providers offer data encryption both in transit and at rest. Implement strict access controls using identity and access management policies. Ensure your provider has relevant compliance certifications like SOC 2, HIPAA, or GDPR depending on your industry. Monitor all AI service usage through audit logs and set up anomaly detection. Secure your APIs with proper authentication tokens and rate limiting. Always review the shared responsibility model - understand what security aspects you control versus the provider.",
    type: "list"
  },
  {
    id: 14,
    title: "Cost Analysis",
    subtitle: "Understanding AIaaS Pricing Models",
    content: [
      "Pay-per-API-Call: Charged per request (e.g., $0.001 per image analysis)",
      "Compute Time: Billed for model training/inference hours",
      "Data Storage: Costs for storing datasets and models",
      "Tiered Pricing: Volume discounts at higher usage levels",
      "Example: AWS Rekognition - $1 per 1,000 images analyzed"
    ],
    notes: "Understanding AIaaS costs is crucial for budgeting. Most services use pay-per-API-call pricing - you're charged for each request, like a dollar per thousand images analyzed. Compute time charges apply when training custom models or running inference. You'll also pay for data storage. Most providers offer tiered pricing with volume discounts. For example, AWS Rekognition charges about one dollar per thousand images analyzed, but this drops significantly at higher volumes. While this seems cheap, costs can add up quickly with millions of requests. Always use cost calculators and set up billing alerts.",
    type: "list"
  },
  {
    id: 15,
    title: "AIaaS vs Traditional AI",
    subtitle: "A Side-by-Side Comparison",
    content: [
      "Setup Time: Days (AIaaS) vs Months (Traditional)",
      "Initial Cost: Minimal (AIaaS) vs High (Traditional)",
      "Expertise Needed: Low (AIaaS) vs High (Traditional)",
      "Customization: Limited (AIaaS) vs Complete (Traditional)",
      "Maintenance: Provider-managed (AIaaS) vs Self-managed (Traditional)",
      "Best For: AIaaS = Quick deployment, standard use cases | Traditional = Full control, unique requirements"
    ],
    notes: "How does AIaaS compare to traditional AI? Setup time is dramatically different - days for AIaaS versus months for traditional approaches. Initial costs are minimal with AIaaS but can reach millions for traditional infrastructure. AIaaS requires less expertise, while traditional AI needs specialized teams. However, traditional AI offers complete customization while AIaaS is somewhat limited. Maintenance is handled by the provider in AIaaS but is your responsibility traditionally. The key is choosing based on your needs - AIaaS excels at quick deployment and standard use cases, while traditional AI is better when you need full control or have highly unique requirements.",
    type: "list"
  },
  {
    id: 16,
    title: "Integration Strategies",
    subtitle: "How to Adopt AIaaS in Your Organization",
    content: [
      "1. Start Small: Pilot with non-critical use cases",
      "2. Assess Requirements: Identify specific business needs",
      "3. Choose Provider: Evaluate based on features, cost, support",
      "4. API Integration: Connect through REST APIs or SDKs",
      "5. Monitor Performance: Track accuracy, latency, costs",
      "6. Scale Gradually: Expand to more use cases after success"
    ],
    notes: "Successfully integrating AIaaS requires a strategic approach. First, start small with a pilot project on non-critical use cases to learn without risk. Second, clearly assess your specific business requirements - don't adopt AI just because it's trendy. Third, carefully choose a provider by evaluating features, costs, and support options. Fourth, integrate through REST APIs or SDKs - most providers offer libraries for popular languages. Fifth, continuously monitor performance metrics like accuracy, latency, and costs. Finally, scale gradually by expanding to more use cases once you've proven success. This phased approach minimizes risk and maximizes learning.",
    type: "list"
  },
  {
    id: 17,
    title: "Future Trends in AIaaS",
    subtitle: "What's Coming Next",
    content: [
      "🤖 Edge AI: Running AI models on edge devices, not just cloud",
      "🧩 AutoML: Automated machine learning for non-experts",
      "🔗 AI Orchestration: Combining multiple AI services seamlessly",
      "🎯 Industry-Specific Models: Vertical AI solutions for specialized domains",
      "🌐 Federated Learning: Training models without centralizing data",
      "🗣️ Multimodal AI: Services combining vision, language, and speech"
    ],
    notes: "The future of AIaaS is exciting. Edge AI will bring intelligence to devices themselves, reducing latency and improving privacy. AutoML will make machine learning accessible to non-experts through automated model building. AI orchestration platforms will seamlessly combine multiple AI services. We'll see more industry-specific models tailored for healthcare, legal, finance, and other verticals. Federated learning will enable model training without centralizing sensitive data. Finally, multimodal AI will combine vision, language, and speech in sophisticated ways. These trends will make AI even more powerful and accessible.",
    type: "bullets"
  },
  {
    id: 18,
    title: "Ethical Considerations",
    subtitle: "Responsible AI Usage",
    content: [
      "⚖️ Bias and Fairness: Pre-trained models may contain societal biases",
      "🔍 Transparency: Understanding how AI makes decisions",
      "👤 Privacy: Protecting user data and consent",
      "💼 Accountability: Who's responsible when AI makes mistakes?",
      "🌍 Environmental Impact: Energy consumption of cloud AI",
      "🎓 Best Practices: Regular audits, diverse training data, human oversight"
    ],
    notes: "As we adopt AIaaS, we must consider ethical implications. Pre-trained models can contain biases from their training data, leading to unfair outcomes. Transparency is crucial - we need to understand how AI makes decisions, especially in sensitive areas like hiring or lending. Privacy protection and user consent are paramount. Accountability is murky - when AI makes a mistake, who's responsible? We must also consider environmental impact, as training large models consumes enormous energy. Best practices include regular audits for bias, using diverse training data, maintaining human oversight, and staying informed about emerging ethical guidelines.",
    type: "bullets"
  },
  {
    id: 19,
    title: "Key Takeaways",
    subtitle: "What to Remember",
    content: [
      "✅ AIaaS democratizes AI by making it accessible and affordable",
      "✅ Major providers offer comprehensive services for various use cases",
      "✅ Benefits include cost savings, rapid deployment, and scalability",
      "✅ Challenges include privacy, vendor lock-in, and customization limits",
      "✅ Security and ethics must be prioritized in implementation",
      "✅ The future promises more powerful, accessible, and specialized AI services"
    ],
    notes: "Let's recap the key points. AIaaS democratizes artificial intelligence by making it accessible and affordable for organizations of all sizes. Major cloud providers offer comprehensive services covering everything from vision to language to prediction. The benefits are clear - cost savings, rapid deployment, and infinite scalability. However, challenges exist around privacy, vendor lock-in, and customization limitations. Security and ethical considerations must be at the forefront of any implementation. Looking ahead, the future promises even more powerful, accessible, and specialized AI services that will continue transforming how businesses operate.",
    type: "bullets"
  },
  {
    id: 20,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    content: [
      "📧 Email: [your.email@college.edu]",
      "🌐 LinkedIn: [Your Profile]",
      "📚 References: Available upon request",
      "",
      "Let's discuss your thoughts and questions about AIaaS!"
    ],
    notes: "Thank you for your attention. I hope this presentation has given you a comprehensive understanding of AI as a Service - what it is, how it works, its benefits and challenges, and where it's heading. AIaaS is truly revolutionizing how businesses leverage artificial intelligence, making powerful AI capabilities accessible to organizations of all sizes. I'm now happy to take any questions you might have. We can discuss specific use cases, technical details, or anything else about AIaaS that interests you. Thank you!",
    type: "end"
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      setShowNotes(!showNotes);
    }
  };

  useState(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown as any);
      return () => window.removeEventListener('keydown', handleKeyDown as any);
    }
  });

  const slide = slides[currentSlide];

  return (
    <div className="presentation-container">
      <div className="slide-wrapper">
        <div className={`slide slide-${slide.type}`}>
          {slide.type === 'title' && (
            <div className="title-slide">
              <div className="cloud-icon">☁️</div>
              <div className="ai-icon">🤖</div>
              <h1>{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
            </div>
          )}

          {slide.type === 'list' && (
            <div className="content-slide">
              <h2>{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <ul className="content-list">
                {slide.content?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {slide.type === 'bullets' && (
            <div className="content-slide">
              <h2>{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="bullets-grid">
                {slide.content?.map((item, index) => (
                  <div key={index} className="bullet-item">{item}</div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'end' && (
            <div className="title-slide end-slide">
              <div className="thank-you-icon">🎓</div>
              <h1>{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
              <div className="contact-info">
                {slide.content?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          )}

          <div className="slide-number">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {showNotes && (
          <div className="speaker-notes">
            <h3>Speaker Notes:</h3>
            <p>{slide.notes}</p>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="nav-btn">
          ← Previous
        </button>
        <button onClick={() => setShowNotes(!showNotes)} className="notes-btn">
          {showNotes ? 'Hide Notes' : 'Show Notes'} (N)
        </button>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="nav-btn">
          Next →
        </button>
      </div>

      <div className="keyboard-hints">
        Use ← → or Space to navigate | Press N for speaker notes
      </div>
    </div>
  );
}
