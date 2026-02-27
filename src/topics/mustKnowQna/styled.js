// src/topics/mustKnowQna/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px 26px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 12px;
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .title {
            font-size: 22px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .countPill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 12px 26px var(--color-shadow);
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;

            svg {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            .count {
                color: var(--color-text-secondary);
                font-weight: 900;
            }
        }

        .sub {
            color: var(--color-text-secondary);
            max-width: 900px;
            font-size: 13px;
            line-height: 1.6;
        }

        .controls {
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 10px;

            @media (width < 760px) {
                grid-template-columns: 1fr;
            }
        }

        .search,
        .filter {
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            padding: 8px 10px;
        }

        .leftIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 16px;
            flex: 0 0 auto;
        }

        input {
            width: 100%;
            background: transparent;
            border: 0;
            padding: 8px 6px;
            border-radius: 10px;
            color: var(--color-text-primary);
        }

        select {
            width: 100%;
            background: transparent;
            border: 0;
            padding: 8px 6px;
            border-radius: 10px;
            color: var(--color-text-primary);
            cursor: pointer;
        }

        .clearBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            &:hover {
                background: var(--color-surface-2);
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .qRow {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 12px;
            color: var(--color-text-primary);

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 85%,
                    var(--color-surface)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: -2px;
            }
        }

        .qLeft {
            display: flex;
            align-items: baseline;
            gap: 10px;
            min-width: 0;
            text-align: left;
        }

        .qid {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
            padding: 4px 8px;
            border-radius: 999px;
            flex: 0 0 auto;
        }

        .qText {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media (width < 640px) {
                white-space: normal;
            }
        }

        .qRight {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .aBlock {
            border-top: 1px solid var(--color-border);
            padding: 12px 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .aText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.65;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tag {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 999px;
            font-weight: 900;

            &:hover {
                border-color: var(--color-border-light);
                color: var(--color-text-primary);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 60%,
                    var(--color-border)
                );
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .empty {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            padding: 16px;
        }

        .emptyTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            letter-spacing: 0.2px;
        }

        .emptySub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .emptyBtns {
            display: flex;
            gap: 10px;
            margin-top: 12px;
            flex-wrap: wrap;

            button {
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                padding: 10px 12px;
                border-radius: 12px;
                font-weight: 900;

                &:hover {
                    background: var(--color-surface-2);
                    border-color: var(--color-border-light);
                }

                &:active {
                    transform: translateY(1px);
                }

                &:focus-visible {
                    outline: 2px solid var(--color-primary);
                    outline-offset: 3px;
                }
            }
        }
    `,
};
