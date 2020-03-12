<template>
    <div class="booking__info">
        <span v-if="checkInDateContent !== 'null'" class="booking__info--text">
            <small>{{$t('checkin')}}:</small>
            {{checkInDateContent | dateFormat}}
        </span>
        <span v-if="checkOutDateContent !== 'null'" class="booking__info--text">
            <small>{{$t('checkout')}}:</small>
            {{checkOutDateContent | dateFormat}}
        </span>
        <span v-if="roomTypeText !== 'null' && stepper > 2" class="booking__info--text">
            <small>{{$t('room_type')}}:</small>
            {{roomTypeText}}
        </span>
        <span v-if="landscapeText !== 'null' && stepper > 2" class="booking__info--text">
            <small>{{$t('landscape')}}:</small>
            {{landscapeText}}
        </span>
    </div>
</template>

<script>
    import fromUnixTime from 'date-fns/fromUnixTime'
    import format from 'date-fns/format'

    export default {
        name: 'InfoBooking',
        props: {
            stepper: '' // eslint-disable-line
        },
        filters: {
            dateFormat(val) {
                const formatDate = fromUnixTime(val)
                return format(formatDate, 'P')
            }
        },
        computed: {
            checkInDateContent() {
                return this.checkInDateFormField = localStorage.checkInDateFormField; // eslint-disable-line
            },
            checkOutDateContent() {
                return this.checkOutDateFormField = localStorage.checkOutDateFormField; // eslint-disable-line
            },
            roomTypeContent() {
                return this.roomTypeInputFormField = localStorage.roomTypeInputFormField; // eslint-disable-line
            },
            landscapeContent() {
                return this.landscapeInputFormField = localStorage.landscapeInputFormField; // eslint-disable-line
            },
            roomTypeText() { // eslint-disable-line
                if (this.roomTypeContent === '1') {
                    return this.$t("standard_room")
                }
                if (this.roomTypeContent === '2') {
                    return this.$t("deluxe_room")
                }
                if (this.roomTypeContent === '3') {
                    return this.$t("suit_room")
                }
            },
            landscapeText() { // eslint-disable-line
                if (this.landscapeContent === '1') {
                    return this.$t("sea")
                }
                if (this.landscapeContent === '2') {
                    return this.$t("overland")
                }
            }
        }
    }
</script>
