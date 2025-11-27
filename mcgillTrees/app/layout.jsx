import "../styles.css";

export const metadata = {
  title: "Tree Identification Quiz",
  description: "A simple this-or-that quiz to identify trees by their traits."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


