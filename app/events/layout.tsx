import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <div className="pt-28">{children}</div>
    </div>
  );
}
