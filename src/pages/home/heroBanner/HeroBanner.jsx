import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Bem-vindo.</span>
          <span className="subTitle">
            Milhões de filmes, programas de TV e pessoas para descobrir. Explore
            agora.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Pesquise um filme ou programa de TV...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            {query.length > 0 ? (
              <Link to={`/search/${query}`}>
                <button>Pesquisar</button>
              </Link>
            ) : (
              <button>Pesquisar</button>
            )}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
