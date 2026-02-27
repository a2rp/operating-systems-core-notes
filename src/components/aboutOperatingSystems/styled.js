// src/components/aboutOperatingSystems/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 22px 16px 22px;

        .top {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 14px;
        }

        .badgeRow {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            color: var(--color-text-primary);
            padding: 7px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                font-size: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            &.muted {
                color: var(--color-text-secondary);

                svg {
                    color: color-mix(
                        in srgb,
                        var(--color-accent) 80%,
                        var(--color-text-primary)
                    );
                }
            }
        }

        .title {
            font-size: clamp(22px, 2.4vw, 34px);
            letter-spacing: 0.2px;
            line-height: 1.15;
            color: var(--color-text-primary);
        }

        .sub {
            max-width: 860px;
            color: var(--color-text-secondary);
        }

        .hero {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 20px 60px var(--color-shadow);
            margin-bottom: 16px;
            min-height: 180px;

            img {
                width: 100%;
                height: 260px;
                object-fit: cover;
                display: block;
                transition: opacity 220ms ease;
                opacity: 0;
            }

            .heroSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        600px 220px at 20% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 16%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        600px 240px at 80% 90%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 12%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    var(--color-surface-2);
                opacity: 0.95;
            }

            .heroOverlay {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 14px 14px 12px;
                background: linear-gradient(
                    180deg,
                    transparent,
                    color-mix(in srgb, var(--color-bg) 85%, transparent)
                );
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            .heroTitle {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
            }

            .heroMeta {
                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 700;
            }

            @media (width < 680px) {
                img {
                    height: 210px;
                }
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 14px;

            @media (width < 980px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 18px 44px var(--color-shadow);
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;

            .icon {
                height: 36px;
                width: 36px;
                border-radius: 12px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 auto;
                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );
                box-shadow: 0 14px 28px var(--color-shadow);

                svg {
                    color: color-mix(
                        in srgb,
                        var(--color-primary) 75%,
                        var(--color-text-primary)
                    );
                    font-size: 18px;
                }
            }

            .h3 {
                font-size: 15px;
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-size: 13px;
                line-height: 1.55;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 900;
            padding: 1px 6px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
        }

        .miniNote {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 65%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .miniTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }
        }

        .monoBlock {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
            line-height: 1.6;
            word-break: break-word;
        }

        .example {
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px;

            .exampleTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 12px;
                margin-bottom: 8px;
                letter-spacing: 0.2px;
            }
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .step {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 12px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 12px;
        }

        .arrow {
            color: var(--color-text-muted);
            font-weight: 900;
            padding-left: 6px;
        }

        .callout {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            border-radius: 14px;
            padding: 10px 12px;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            span {
                color: var(--color-text-secondary);
                font-size: 12px;
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .chip {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            font-size: 12px;
            padding: 7px 10px;
            border-radius: 999px;
            font-weight: 800;

            &:hover {
                border-color: var(--color-border-light);
                color: var(--color-text-primary);
            }
        }
    `,
};
