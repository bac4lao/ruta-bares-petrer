export const metadata = {
  title: "Ruta de Bares - Petrer",
  description: "Ruta de bares con check-in por QR"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
