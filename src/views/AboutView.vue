<template>
    <!-- https://nykim.work/27?category=692675 -->
    <div class="world">
        <div class="progress">
            <div class="progress__bar"></div>
        </div>
        <div class="stage">
            <div ref="house" class="house">
                <div class="house__wall house__wall--left"></div>
                <div class="house__wall house__wall--right"></div>
                <div class="house__wall house__wall--front house__wall--front-a">
                    <div class="house__contents">
                        <h2 class="house__contents-title">
                            Hello!
                        </h2>
                    </div>
                </div>
                <div class="house__wall house__wall--front house__wall--front-b">
                    <div class="house__contents">
                        <h2 class="house__contents-title">
                            Bonjour!
                        </h2>
                    </div>
                </div>
                <div class="house__wall house__wall--front house__wall--front-c">
                    <div class="house__contents">
                        <h2 class="house__contents-title">
                            Namaste!
                        </h2>
                    </div>
                </div>
                <div class="house__wall house__wall--front house__wall--front-d">
                    <div class="house__contents">
                        <h2 class="house__contents-title">
                            안녕하세요!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="char">
            <div class="char__con char__head">
                <div class="char__face char__head-face face-front"></div>
                <div class="char__face char__head-face face-back"></div>
            </div>
            <div class="char__con char__torso">
                <div class="char__face char__torso-face face-front"></div>
                <div class="char__face char__torso-face face-back"></div>
            </div>
            <div class="char__con char__arm char__armLeft">
                <div class="char__face char__arm-face face-front"></div>
                <div class="char__face char__arm-face face-back"></div>
            </div>
            <div class="char__con char__arm char__armRight">
                <div class="char__face char__arm-face face-front"></div>
                <div class="char__face char__arm-face face-back"></div>
            </div>
            <div class="char__con char__leg char__legRight">
                <div class="char__face char__leg-face face-front"></div>
                <div class="char__face char__leg-face face-back"></div>
            </div>
            <div class="char__con char__leg char__legLeft">
                <div class="char__face char__leg-face face-front"></div>
                <div class="char__face char__leg-face face-back"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
export default {
    setup () {
        let houseElem = null
        let barElem = null
        let maxScrollValue = null
        let scrollerPer = null

        onMounted (() => {
            houseElem = document.querySelector('.house')
            barElem = document.querySelector('.progress')
            window.addEventListener('scroll', scrollHandler)
            window.addEventListener('resize', resizeHandler)
            // window.addEventListener('mousemove', mouseMoveHandler)
        })
        onUnmounted (() => {
            console.log('2')
            window.removeEventListener('scroll', scrollHandler)
            window.removeEventListener('resize', resizeHandler)
        })
        /* methods */
        const scrollHandler = () => {
            resizeHandler()
            scrollerPer = window.pageYOffset / maxScrollValue
            const zMove = (window.pageYOffset / maxScrollValue) * 950 - 500
            houseElem.style.transform = 'translateZ(' + zMove + 'vw)'
            barElem.style.width = scrollerPer * 100 + '%'
        }
        const resizeHandler = () => {
            maxScrollValue = document.body.offsetHeight - window.innerHeight
        }
        /* const mouseMoveHandler = (e) => {
            console.log(e.clientX, e.clientY)
        } */
        /* watch(houseElem, (value) => {
            console.log(value)
        }) */
        return {
            /* houseElem,
            barElem, */
            onMounted,
            onUnmounted
        }
    }
}
</script>

<style lang="scss">
    
</style>>
