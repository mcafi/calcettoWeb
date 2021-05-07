<template>
    <div class="matchItem p-5 my-5 rounded-xl flex flex-row align-middle justify-between bg-white dark:bg-grey-700 text-grey-800 dark:text-grey-200 shadow-lg">
        <div class="mx-2 my-auto text-center font-bold">
            <div class="text-base">
                {{ getDate() }}
            </div>
            <div class="text-2xl">
                {{ getTime() }}
            </div>
        </div>
        <div class="matchInfo w-full text-left py-0 px-3">
            <span class="font-bold text-lg mb-2">{{ match.place.name }}</span><br>
            {{ match.matchName }}
            <p>
                <span class="font-extrabold">
                    {{ match.available - match.partecipants.length }}/{{ match.available }}
                </span>
                posti liberi</p>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    props: ["match"],
    methods: {
        getDate: function () {
            const matchDate = moment(this.match.matchDate);
            return matchDate.format("DD MMM");
        },
        getTime: function() {
            const matchDate = moment(this.match.matchDate);
            return matchDate.format("HH:mm");
        }
    }
}
</script>

<style lang="postcss" scoped>
</style>