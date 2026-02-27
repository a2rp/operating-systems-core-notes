// src/topics/mustKnowQna/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import QNA from "./qnaData";
import {
    FiSearch,
    FiFilter,
    FiX,
    FiChevronDown,
    FiChevronUp,
    FiHash,
} from "react-icons/fi";

const MustKnowQna = () => {
    const [query, setQuery] = useState("");
    const [activeTag, setActiveTag] = useState("all");
    const [openId, setOpenId] = useState(QNA[0]?.id || "q-001");

    const tags = useMemo(() => {
        const set = new Set();
        QNA.forEach((x) => {
            (x.tags || []).forEach((t) => set.add(t));
        });
        return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        return QNA.filter((item) => {
            const tagOk =
                activeTag === "all"
                    ? true
                    : (item.tags || []).includes(activeTag);

            if (!tagOk) return false;

            if (!q) return true;

            const hay =
                `${item.q} ${item.a} ${(item.tags || []).join(" ")}`.toLowerCase();
            return hay.includes(q);
        });
    }, [query, activeTag]);

    const shownCount = filtered.length;
    const totalCount = QNA.length;

    const clearQuery = () => setQuery("");
    const clearTag = () => setActiveTag("all");

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? "" : id));
    };

    return (
        <Styled.Wrapper id="must-know-qna">
            <div className="top">
                <div className="titleRow">
                    <h2 className="title">Must Know Interview QnA</h2>
                    <div className="countPill" title="Shown - Total">
                        <FiHash />
                        <span className="count">
                            {shownCount} - {totalCount}
                        </span>
                    </div>
                </div>

                <p className="sub">
                    Short, direct answers. Use search and tag filter to revise
                    fast.
                </p>

                <div className="controls">
                    <div className="search">
                        <span className="leftIcon">
                            <FiSearch />
                        </span>

                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search questions, answers, tags"
                            aria-label="Search QnA"
                        />

                        {query.trim() && (
                            <button
                                type="button"
                                className="clearBtn"
                                onClick={clearQuery}
                                aria-label="Clear search"
                                title="Clear search"
                            >
                                <FiX />
                            </button>
                        )}
                    </div>

                    <div className="filter">
                        <span className="leftIcon">
                            <FiFilter />
                        </span>

                        <select
                            value={activeTag}
                            onChange={(e) => setActiveTag(e.target.value)}
                            aria-label="Filter by topic"
                        >
                            {tags.map((t) => (
                                <option value={t} key={t}>
                                    {t}
                                </option>
                            ))}
                        </select>

                        {activeTag !== "all" && (
                            <button
                                type="button"
                                className="clearBtn"
                                onClick={clearTag}
                                aria-label="Clear filter"
                                title="Clear filter"
                            >
                                <FiX />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="list">
                {filtered.length === 0 && (
                    <div className="empty">
                        <div className="emptyTitle">No matches</div>
                        <div className="emptySub">
                            Try a different keyword or reset the filter.
                        </div>
                        <div className="emptyBtns">
                            <button type="button" onClick={clearQuery}>
                                Clear search
                            </button>
                            <button type="button" onClick={clearTag}>
                                Reset filter
                            </button>
                        </div>
                    </div>
                )}

                {filtered.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                        <div className="qa" key={item.id}>
                            <button
                                type="button"
                                className="qRow"
                                onClick={() => toggle(item.id)}
                                aria-expanded={isOpen}
                            >
                                <div className="qLeft">
                                    <span className="qid">{item.id}</span>
                                    <span className="qText">{item.q}</span>
                                </div>

                                <span className="qRight">
                                    {isOpen ? (
                                        <FiChevronUp />
                                    ) : (
                                        <FiChevronDown />
                                    )}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="aBlock">
                                    <div className="aText">{item.a}</div>

                                    {!!(item.tags || []).length && (
                                        <div className="tags">
                                            {(item.tags || []).map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    className={`tag ${activeTag === t ? "active" : ""}`}
                                                    onClick={() =>
                                                        setActiveTag(t)
                                                    }
                                                    title={`Filter by ${t}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Styled.Wrapper>
    );
};

export default MustKnowQna;
