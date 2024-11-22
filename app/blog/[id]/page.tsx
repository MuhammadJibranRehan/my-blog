// app/blog/[id]/page.tsx
"use client"; // Make it a client component

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Comments from "@/components/comments";

// Dummy blog posts data (replace with your API or database fetch later)
const blogPosts = {
  1: {
    title: "Understanding React",
    content:
      "The world can't live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library's fundamentals and work with a simple demo.React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. ",
  },
  2: {
    title: "Next.js 14 Features",
    content:
      "Next.js 14 is here, and it’s a serious step towards further improvement of the web development processes. It includes concrete improvements in performance, developer experience, and scalability.Next.js is committed to progress. Their team constantly pushes the boundaries, ensuring the framework stays at the forefront of technology. This is one of the reasons why it’s become one of the most popular web frameworks, favoured by businesses and developers, and why we love it so much!Next.js 14 arrived with several key features and optimizations, which make it an even more powerful tool. For those of us passionate about building high-quality websites, these updates are both exciting and promising. Of course, there are still voices, that not all of the features work as expected, but we think the main reason is that most of them require some mental shift, and it always takes time.",
  },
  3: {
    title: "TypeScript Basics",
    content:
      "TypeScript adds static types to JavaScript, making your code more robust...",
  },
  4: {
    title: "Web Developement",
    content:
      "Web development is creating, building, and maintaining websites to run efficiently on a browser... Web design, database management, and web programming are key aspects of the process... Frontend Development: Focuses on developing the user-facing side of a website or application by writing codes and developing visual elements, determining how a user will interact with the site... Backend Development: Deals with server-side functionality to handle tasks like storing databases, processing user input, and ensuring website security... Full Stack Development: Involves both backend and frontend development, focusing on both the server and client-side development of the website or applications... Database Management: It deals with accurate and secure storing and handling of databases to ensure the data is managed effectively for all web processes Web Design: Web design determines the design and functionality of different aspects of a website and primarily focuses on providing an enhanced user experience... Maintenance and Updates: Website maintenance is an iterative process that fixes bugs updated features, and ensures security to keep all tools running smoothly.",
  },
};

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic route parameter (ID)
  const [blogData, setBlogData] = useState<{
    title: string;
    content: string;
  } | null>(null);

  // Fetch blog data (replace with an API fetch later)
  useEffect(() => {
    const post = blogPosts[id as unknown as keyof typeof blogPosts]; // Get post from dummy data
    setBlogData(
      post || {
        title: "Blog Not Found",
        content: "No content available for this blog.Thank You",
      }
    );
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {blogData ? (
          <>
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">
              {blogData.title}
            </h1>
            <p className="text-lg text-gray-800 mb-6">{blogData.content}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        {/* Comments section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Comments
          </h2>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;