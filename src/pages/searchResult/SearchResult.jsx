import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./styles.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetchDataFromApi(
      `/search/multi?query=${query}&page=${pageNum}&language=pt-BR`
    );
    setData(response);
    setPageNum((prev) => prev + 1);
    setLoading(false);
  };

  const fetchNextPageData = async () => {
    const response = await fetchDataFromApi(
      `/search/multi?query=${query}&page=${pageNum}&language=pt-BR`
    );
    if (data?.results) {
      setData({
        ...data,
        results: [...data.results, ...response.results],
      });
    } else {
      setData(response);
    }
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Resultado da pesquisa por  '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">
              Desculpe, resultados não encontrados!
            </span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
