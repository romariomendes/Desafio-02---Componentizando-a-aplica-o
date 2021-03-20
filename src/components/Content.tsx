import "../styles/content.scss";

interface ContentProps {
  genreTitle: string;
}

export function Content({ genreTitle }: ContentProps) {
  return (
    <>
      <header>
        <span className="category">
          {" "}
          Categoria: <span>{genreTitle}</span>
        </span>
      </header>
    </>
  );
}
