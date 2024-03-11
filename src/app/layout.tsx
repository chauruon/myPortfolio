import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Chau Rươn",
  description: "Tất cả các thông tin và các dự án đã tham gia trong quá trình làm việc tại công ty và một số dự án cá nhân để học hỏi và tìm hiểu nhưng nền tảng công nghệ mà bản thân chưa được làm tại công ty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
