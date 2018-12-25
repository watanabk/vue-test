<template>
    <footer class="footer">
        <nav class="footer-inner">
            <div class="category">
                <ul class="items">
                    <li><p>Copyright © XXXX All Rights Reserved.</p></li>
                </ul>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped lang="scss">
    .footer {
        color: #006400;
        width: 100%;
        height: 32px;
        position: relative;
        div.category {
            position: absolute;
            right: 5px;
            ul.items {
                list-style: none;
                li {
                    float: left;
                    p {
                        line-height: 1px;
                    }
                }
            }
        }   
    }

    /* for smartphone */
    @media (min-width: 768px) {
    }
    /* for tablet */
    @media (min-width: 992px) {
    }
    /* for PC */
    @media (min-width: 1200px) {
    }
</style>