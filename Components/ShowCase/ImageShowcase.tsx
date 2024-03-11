import { nanoid } from '@reduxjs/toolkit'
import React from 'react'

type Props = {}

function ImageShowcase({ }: Props) {
    const data = {
        "backdrops": [
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
                "vote_average": 6.206,
                "vote_count": 28,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg",
                "vote_average": 5.522,
                "vote_count": 4,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1152,
                "iso_639_1": null,
                "file_path": "/9QlpS2v3lgT6S310QglSky5Ws0P.jpg",
                "vote_average": 5.318,
                "vote_count": 3,
                "width": 2048
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/u3a7hKGhQehkgVq9dt1DohzNk8F.jpg",
                "vote_average": 5.318,
                "vote_count": 3,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "es",
                "file_path": "/g7p6k4XsYbvKZllMqCtMTb7mdO4.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "uk",
                "file_path": "/iDGQJ1vP92rGt5ZEg7EquiD8r7Y.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/gLhfWP4KX5aGo9nWRvcoI6ZPIR0.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/grQw3IQho6wAkZPStfGSRNA30OY.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/jwy4WUw3VoOko73QNV324dm5shI.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/3FwAaMmkAn1lEDSUm8XsTlGK0Gd.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/tqigwm15EruVfe5iwAv3VvhxPiH.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "fr",
                "file_path": "/kc0rRHDOe0A6RrfljD40L6qfr9T.jpg",
                "vote_average": 5.312,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1511,
                "iso_639_1": null,
                "file_path": "/3pF4tO8vIRMO98NsNjxb9EZkgbj.jpg",
                "vote_average": 5.276,
                "vote_count": 12,
                "width": 2686
            },
            {
                "aspect_ratio": 1.778,
                "height": 1215,
                "iso_639_1": null,
                "file_path": "/eyWAvqn2tPtCFhWMgWU9jLwacEj.jpg",
                "vote_average": 5.252,
                "vote_count": 4,
                "width": 2160
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/cfeFqkQesnqUB7cxVhPnJjUt0EY.jpg",
                "vote_average": 5.252,
                "vote_count": 4,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "es",
                "file_path": "/2mxPcFTnHJjc7BgNnbETLK28cRG.jpg",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/ejz14Xwvftn8vCTA0dAh5rlGOmU.jpg",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/xnqjfHoDRS3inofSC55PbQouzJ4.jpg",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 3840
            },
            {
                "aspect_ratio": 1.777,
                "height": 862,
                "iso_639_1": null,
                "file_path": "/ypKROTROwMdbUteTMG6CP2Y4yug.jpg",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 1532
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "fr",
                "file_path": "/hDfpnDmaig8s7zUnKmRETr77NRm.jpg",
                "vote_average": 5.246,
                "vote_count": 2,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/A7JQ7MIV5fkIxceI5hizRIe6DRJ.jpg",
                "vote_average": 5.212,
                "vote_count": 11,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1915,
                "iso_639_1": null,
                "file_path": "/v6cPfPjrWxJn5XkEXAHUL21MSBE.jpg",
                "vote_average": 5.19,
                "vote_count": 5,
                "width": 3405
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/7TUp4uKIaX9c2TAZLPwjty5A0EP.jpg",
                "vote_average": 5.18,
                "vote_count": 3,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/99NBEpQEM4uLItZY2RquqdqdSXM.jpg",
                "vote_average": 5.18,
                "vote_count": 3,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/nyPL8GW5jy2niM9vyRSn4wF29cT.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "uk",
                "file_path": "/iKdzvxFsYYjjCulh3gvrk8hDhCZ.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/A0DPj34Vz34afyHnrD0M3yXVC60.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/yHlWW7YBV8fN3it3GxWeiQA03I5.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/u1Yw0TooOVBD3YfIvRi88aygq9Q.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/lMi3QjfkGkKpIt06jkecDVkC1z8.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/bNH2J6QyxG3JZthnQxdZFoNjKJH.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/rR1vGEC1csvWfQ9eLKsSWukfiLp.jpg",
                "vote_average": 5.146,
                "vote_count": 10,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/jRSAkKG9QSu6Nc1zvI3ejmgLshe.jpg",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/AqXEtCbpKxqfE19bCRQfIeIbHxU.jpg",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/uZj1SopVPR4QEn16mQ6KVzZEQ45.jpg",
                "vote_average": 5.106,
                "vote_count": 2,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/4IYRAyTbpL05xHqCii5lMTtxMHO.jpg",
                "vote_average": 5.09,
                "vote_count": 11,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/y3TOWYsiHiSAwemF6nR5MpViezs.jpg",
                "vote_average": 5.068,
                "vote_count": 18,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1816,
                "iso_639_1": null,
                "file_path": "/hsyvbyU0mFO8tYHNDN67tQqDnNW.jpg",
                "vote_average": 5.068,
                "vote_count": 7,
                "width": 3229
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/fLhiNfHBTC2bncrQM4bgXqJh2Hv.jpg",
                "vote_average": 4.914,
                "vote_count": 12,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/q3IK7KJPdfl8AeJnBvB1AQbIhBM.jpg",
                "vote_average": 4.828,
                "vote_count": 16,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/51vreLbrGwzAg4WRCHgitWz6Naw.jpg",
                "vote_average": 4.62,
                "vote_count": 18,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/rJSsDNItboQaAZYzTokdihfpTR5.jpg",
                "vote_average": 4.552,
                "vote_count": 12,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "it",
                "file_path": "/rCy979yzeT4rQjPZN1GNEFAnlnt.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "es",
                "file_path": "/pwjgP0hT78umrb7Th7V7vhwBmP1.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/c6ompU6v1HZwg0plN4pp8YoN70X.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/cfwhU4QACANkXIHSfq0P2LQj6QL.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/fYL3xF1uU3lbNWGv7qoyNS40FIs.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "cs",
                "file_path": "/7MkB4S7wuGAaDLpyYO1OnQyQTaZ.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "es",
                "file_path": "/vBPVrAt7JmT2zjp6lH1KJ6NQqwG.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/tipUmGr4Rpy4kkQsrRhX39vBIL1.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/bY6R8Cx0u98pTpiozrk5dfKiwD5.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/rVSsjepWbzfS2gIM6Cd5MTKVjUA.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1500,
                "iso_639_1": null,
                "file_path": "/39ULt9NiyvbPGWhxZ9iOYUUSA3Z.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 2667
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/mHHgI3UZM4PMMH4fZ8YUqJCxGLs.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/9vhDWMokbgLTSfo2HuqznKVPh1.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/eaWroVuywdwMULKCvm2LSKfS0xr.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/1wMj4nKXjDKd8h8V4QwVmeD0RdF.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/qMNO37VwrzfyZNKVob0CqlJCY7V.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/zIfEeOUeSUh41Jvsd7cbT6dC0jZ.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/qAulPuIltLWMKq6z9ET30VdY3QH.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/pLrmg6HR2PTydBLGXc1D5ZaGORT.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/zU2FxAW3iqYndrKsvYm49XvK2wY.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/qwZAteZtphew2ufINZlGBIyaFiM.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/nHMiU2rcswh6wFlVyOxHRTzjTJ8.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/cPhvjLaxm1kH4cJ88DNPzinH1Aq.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/wPzUXdOMy7dsb4pWVlmhd7xNaO8.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/kK191emC6JXtrBAIzAzPqfr7lBm.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/d4EV3LyVyxvaR8e9zTAl1rV1aLp.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/lLAZtZP393m7ZFHl6msjifcXLQ1.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/1iJN7HhIDdqYTcLhI0pph8TKXnY.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/ouJWN6CH8SpWzWxxxotJodplLiG.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/he0YuWWcdQJfTCkslKbunBLO2Na.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/e7q7MXr4VltB3ZLgBrpAoum1oqp.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/uzxWRsCLnyGMzMc7Jprtj5FumwB.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/7kBnoren4FN9nQvmeG0x6EjBcNP.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/7fKAoQCuobCcxxrM50ZQltg6FdL.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/1FCAavQHEb5Qiw9q8QXDcvd5muY.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": null,
                "file_path": "/u6K5v3hrIInfYzWptg7kuIrlLYz.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "hu",
                "file_path": "/jtvzGbkZCELrnGg7MCET4xheDGV.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "pt",
                "file_path": "/vDFn5dfPjbVXQGjLo32ubyTDgn6.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "es",
                "file_path": "/eMUDBgMlAem62U1C4R6ve0wPGcB.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/syXftsH8whxlkKBm9I63hDtFF8d.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/7zc694ExqtQORo5Oh7OdhdZQLUi.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "en",
                "file_path": "/4MWhE95qDy1ERMMr0dWvjlcXKGu.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 2160,
                "iso_639_1": "zh",
                "file_path": "/mlIe6oqwUhxr929ytgrXD18FGEO.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 3840
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/cybB81hgL72xclnmEi5moSY7XGs.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/92FSRt73S9SmShz7LfbafarAm9S.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": null,
                "file_path": "/rJTkx8NNCms8vyhwH3GfblSOv3W.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/urRxExgw2HIqeMIS5xsjFj0bSzg.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1920
            }]
    }
    return (
        <div>
            {data.backdrops.map((backdrop: any) => {
                return (
                    <div key={nanoid()} >
                        <img src={'https://image.tmdb.org/t/p/original/' + backdrop.file_path} />
                    </div>
                )
            }
            )}
        </div>

    )
}

export default ImageShowcase