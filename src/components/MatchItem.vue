<template>
    <div class="matchItem">
        <div class="matchDateTime">
            <div class="matchDate">
                {{ getDate() }}
            </div>
            <div class="matchTime">
                {{ getTime() }}
            </div>
        </div>
        <div class="matchInfo">
            <span class="matchLocation">{{ match.place.name }}</span><br>
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

<style lang="scss">
.matchItem {
    padding: 20px;
    margin: 16px;
    box-shadow: 0 0 12px #eee;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.matchLocation {
    font-weight: bold;
    margin-bottom: 8px;
}

.matchDateTime {
    margin: 8px;
}

.matchDate {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

.matchInfo {
    flex: 1;
    text-align: left;
    padding: 0 12px;
}

.matchTime {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}
</style>