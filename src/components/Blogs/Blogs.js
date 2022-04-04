import React from "react";

const Blogs = () => {
  return (
    <section className="mx-16">
      <h1 className="text-right font-mono text-2xl font-semibold text-slate-500 my-5">
        FAQ Environment
      </h1>
      <article className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-500 mb-3">
          What is a purpose of contextApi ?
        </h1>
        <blockquote className="text-gray-600">
          উত্তর: সাধারণত react যখন একটা state থেকে data pass করে তখন ডাটাগুলো
          উপর থেকে নিচের দিকে pass করতে হয়। অর্থাৎ props ড্রিলিং করে করে একটা
          component থেকে আরেকটা component এ ডাটা pass করতে হয় যা একটু পেরাময় এবং
          সময়সাধ্য বলা যায়। contextApi থাকায় অনেক সবিধা হচ্ছে। আমরা parent node
          থেকে directly যেকোনো child component a ডাটা pass করতে পারতেছি কোনো
          props ড্রিলিং করা ছাড়াই। createContext() ব্যবহার করা হয় contextApi এ।
        </blockquote>
      </article>
      <article className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-500 mb-3">
          What is Semantic tag ?
        </h1>
        <blockquote className="text-gray-600">
          Ans: Semantic HTML tags provide information about the contents of
          those tags that goes beyond just how they look on a page. Text that is
          enclosed in the <strong>code</strong> tag is immediately recognized by
          the browser as some type of coding language. Semantic tags gives you
          many more hooks for styling your content, too. Perhaps today you
          prefer to have your code samples display in the default browser style,
          but tomorrow, you might want to call them out with a gray background
          color.
        </blockquote>
      </article>
    </section>
  );
};

export default Blogs;
