import React, { FC } from "react";

import Styled from "./styled";

type TPaginationProps = {
  total: number;
  perPage: number;
  page: number;
  onChange: (pageIdx: number) => void;
  labels: {
    next: string;
    prev: string;
  };
};

const Pagination: FC<TPaginationProps> = ({
  perPage,
  total,
  page,
  onChange,
  labels,
}) => {
  const pages = Math.ceil(total / perPage);

  if (!total) {
    return null;
  }

  return (
    <Styled.Pagination>
      {
        <Styled.Pagination.Button
          variant="text"
          color="neutral"
          brightness={0}
          onClick={() => onChange(page - 1)}
          className="prev-btn"
        >
          {labels.prev}
        </Styled.Pagination.Button>
      }
      {Array.from({ length: pages }).map((_, idx) => (
        <Styled.Pagination.Button
          key={idx}
          onClick={() => onChange(idx)}
          color={idx === page ? "primary" : "secondary"}
        >
          {idx + 1}
        </Styled.Pagination.Button>
      ))}
      {page < pages - 1 && (
        <Styled.Pagination.Button
          variant="text"
          color="neutral"
          brightness={0}
          onClick={() => onChange(page + 1)}
          className="next-btn"
        >
          {labels.next}
        </Styled.Pagination.Button>
      )}
    </Styled.Pagination>
  );
};

export default Pagination;
