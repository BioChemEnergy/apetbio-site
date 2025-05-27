import "../styles/globals.css";

export const metadata = {
  title: 'Projekt ApetBio',
  description: 'Oficiálna stránka projektu ApetBio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}