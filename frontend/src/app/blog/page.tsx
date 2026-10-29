import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips to Prevent Back Pain at Work",
      excerpt: "Learn simple exercises and posture corrections to keep your back healthy while working long hours.",
      date: "October 15, 2024",
      category: "Posture",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Neck Pain: Causes and Solutions",
      excerpt: "Discover the common causes of neck pain and effective physiotherapy treatments for relief.",
      date: "October 10, 2024",
      category: "Pain Management",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Post-Surgery Rehabilitation: What to Expect",
      excerpt: "A comprehensive guide to recovering after orthopedic surgery with physiotherapy.",
      date: "October 5, 2024",
      category: "Rehabilitation",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Exercises for Knee Pain Relief",
      excerpt: "Simple and effective exercises you can do at home to reduce knee pain and improve mobility.",
      date: "September 28, 2024",
      category: "Exercise",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "The Importance of Warm-Up Before Exercise",
      excerpt: "Why warming up is crucial and how to do it properly to prevent injuries.",
      date: "September 20, 2024",
      category: "Injury Prevention",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Physiotherapy for Elderly: Maintaining Independence",
      excerpt: "How physiotherapy helps seniors maintain mobility, balance, and quality of life.",
      date: "September 15, 2024",
      category: "Elderly Care",
      readTime: "8 min read"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Tips & Blog
          </h1>
          <p className="text-xl text-gray-700">
            Expert Articles on Posture, Exercise, and Pain Care
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 cursor-pointer">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
