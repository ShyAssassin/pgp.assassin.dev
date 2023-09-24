<script>
    import { onMount } from "svelte";

    let pgp = "Loading...";

    onMount(async () => {
        let res = await fetch("/pgp.asc");
        pgp = await res.text();
    });

    const copy = () => {
        navigator.clipboard.writeText(pgp);
    };

    const download = () => {
        const element = document.createElement("a");
        const file = new Blob([pgp], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "pgp.asc";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };
</script>

<svelte:head>
    <title>PGP Keys</title>
    <meta name="description" content="My PGP Keys for secure communication" />
</svelte:head>

<div class="pageContainer">
    <section class="navbar">
        <h3 class="brand">PGP Keys</h3>
        <ul class="navLst">
            <li><a href="https://assassin.dev">Home</a></li>
        </ul>
    </section>
    <section class="content">
        <div class="cards">
            <div class="card">
                <div class="cardHeader">
                    <div class="cardTitle" id="cTitle">Main Key</div>
                    <div class="btnGroup">
                        <button class="download" on:click={download}>
                            <span class="material-symbols-outlined">download</span>
                        </button>
                        <button class="copy" on:click={copy}>
                            <span class="material-symbols-outlined">content_paste</span>
                        </button>
                    </div>
                </div>
                <div class="cardContent" id="cKey">
                    {pgp}
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    :root {
        --d0: #111111;
        --d1: #000000;
        --d2: #1d1d1d;
        --d3: #616161;
        --p1: #3700b3;
        --p2: #6200ee;
        --p3: #bb86fc;
    }

    .pageContainer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 100vh;
    }

    .navbar {
        height: 7vh;
        background: var(--d2);

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid var(--d3);
    }

    .brand {
        font-size: 24px;
        margin-left: 15px;
        color: var(--p3);
    }

    .navLst {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .navLst li {
        margin-right: 20px;
    }

    .navLst a {
        text-decoration: none;
        color: var(--d3);
        font-weight: bold;
    }

    .navLst a:hover {
        color: var(--p3);
    }

    .cards {
        align-content: center;
        justify-content: center;
        display: flex;
        /* max-width: 75%; */
        margin: 0;
        padding: 20px;
    }

    .card {
        background: var(--d2);
        border: 1px solid var(--d3);
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        box-shadow: 0px, 2px, 5px hsl(0, 0, 0, 2);
        color: whitesmoke;
    }

    .card:hover {
        border: 1px solid var(--p2);
        box-shadow: 0px 4px 8px hsl(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease;
    }

    .cardHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
    }

    .cardTitle {
        font-size: 30px;
        font-weight: bold;
        font-family: system-ui, -apple-system, sans-serif;
        margin-bottom: 10px;
    }

    .btnGroup {
        display: flex;
        gap: 10px;
    }

    .download,
    .copy {
        font-size: 24px;
        color: var(--d3);
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .download:hover,
    .copy:hover {
        color: var(--p3);
    }

    .cardContent {
        font-size: 19px;
        font-family: "Roboto", monospace;
        background-color: var(--d1);
        color: hsla(0, 0%, 77%, 0.637);
        padding: 10px;
        border-radius: 5px;
        white-space: pre-wrap;
        min-width: 685px;
        min-height: 400px;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--p1), var(--d2);
    }
    .cardContent::-webkit-scrollbar {
        width: 8px;
    }
    .cardContent::-webkit-scrollbar-thumb {
        background: var(--p1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .cardContent::-webkit-scrollbar-thumb:hover {
        background-color: var(--p2);
    }
    .cardContent::-webkit-scrollbar-track {
        background-color: var(--d2);
    }
    @media only screen and (min-width: 669px) and (max-width: 768px) {
        .brand {
            font-size: 20px;
        }
        .cardContent {
            font-size: 18px;
            min-width: 485px;
            min-height: 400px;
        }
    }

    @media only screen and (min-width: 525px) and (max-width: 668px) {
        .brand {
            font-size: 18px;
        }
        .cardContent {
            font-size: 16px;
            min-width: 385px;
            max-width: 385px;
            min-height: 400px;
        }
    }

    @media only screen and (max-width: 524px) {
        .brand {
            font-size: 18px;
        }
        .cardContent {
            font-size: 14px;
            min-width: 280px;
            max-width: 280px;
            min-height: 400px;
        }
    }
</style>
