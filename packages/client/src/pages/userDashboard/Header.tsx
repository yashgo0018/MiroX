export default function Header() {
  return (
    <div className="bg-muted/20 m-2 rounded-md relative overflow-hidden min-h-[20vh]">
      <div className="flex flex-col h-full">
        <p className="text-muted-foreground/60">Wallet</p>
        <h1 className="text-2xl font-mono mt-1">$1,234.42</h1>
        <p className="text-muted-foreground/60 mt-4">5 Managers</p>
      </div>
      <img
        src="https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-smooth-gradient-background-in-black-and-white-png-image_12319638.png"
        className="absolute top-0 right-0 scale-x-[-1] opacity-20 object-cover"
      />
    </div>
  );
}
