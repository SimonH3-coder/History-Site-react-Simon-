import style from "./sign.module.scss";

interface SignProps {
  title: string;
  description: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export function Sign({ title, description, showSearch = false, onSearch }: SignProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(e.currentTarget.value);
    }
  };
  return (
    <div className={style.boxSign}>
      <h1 className={style.overSkrift}>
        {title}
        {title}
        <span>{showSearch && <input type="text" placeholder="Søg her..." onChange={(e) => onSearch?.(e.target.value)} onKeyDown={handleKeyDown} />}</span>
      </h1>
      <p className={style.broedTekst}>{description}</p>
    </div>
  );
}
