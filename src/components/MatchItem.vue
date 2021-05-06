<template>
    <div class="matchItem p-5 m-4 rounded-md flex flex-row align-middle justify-between bg-white dark:bg-grey-700 text-grey-800 dark:text-grey-200 shadow-lg">
        <div class="m-2 text-center font-bold">
            <div class="text-base">
                {{ getDate() }}
            </div>
            <div class="text-2xl">
                {{ getTime() }}
            </div>
        </div>
        <div class="matchInfo w-full text-left py-0 px-3">
            <span class="font-extrabold mb-2">{{ match.place.name }}</span><br>
            {{ match.matchName }}
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