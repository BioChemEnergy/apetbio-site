export const metadata = {
  title: 'ApetBio Project',
  description: 'Web for dissemination of ApetBio project outputs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}