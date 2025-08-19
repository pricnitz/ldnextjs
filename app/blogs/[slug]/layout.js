// app/blogs/[slug]/layout.js

export default function RootLayout({ children }) {
  return (
    <div className="blog-layout">
      {/* Add any layout-specific wrappers or components here */}
      {children}
    </div>
  );
}
