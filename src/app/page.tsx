"use client";

import MovieCard from "@/components/MovieCard";
import { getMovies } from "@/shared/api";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useEffect, useState } from "react";
import "./flicking.css";
import styles from "./page.module.scss";

const _plugins = [new Arrow()];

export default function Home() {
  /**
   * @todo Add type for movies
   */
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    getMovies({ sort_by: "popularity.desc", page: 1 }).then((data) =>
      setMovies(data.results)
    );
  }, []);

  if (!movies || !movies.length) {
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={styles.carousel}>
        <h2>{`${movies.length} most popular movies`}</h2>
        <Flicking
          align="prev"
          circular={true}
          useFindDOMNode
          plugins={_plugins}
        >
          {movies.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} className={styles.card} />
            );
          })}
          <ViewportSlot>
            <span className="flicking-arrow-prev"></span>
            <span className="flicking-arrow-next"></span>
          </ViewportSlot>
        </Flicking>
      </div>
    </main>
  );
}
