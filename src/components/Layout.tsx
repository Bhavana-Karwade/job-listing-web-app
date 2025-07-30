const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-primary">Let's Find Job</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
