<slot />

<style>
    ::global(:root) {
        --d0: #111111;
        --d1: #000000;
        --d2: #1d1d1d;
        --d3: #616161;
        --p1: #3700b3;
        --p2: #6200ee;
        --p3: #bb86fc;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        background: var(--d0);
        font-family: system-ui, -apple-system, sans-serif;
    }

    :global(::selection) {
        color: transparent;
        background: var(--p1);
        padding: 10px;
    }
</style>
