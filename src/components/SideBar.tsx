import "../styles/sidebar.scss";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setdGenreId: Function;
}

export function SideBar({
  genres,
  selectedGenreId,
  setdGenreId,
}: SideBarProps) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>
        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => setdGenreId(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
