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
            stepper: {
                type: Number
            },
            roomType: {
                type: null,
            },
            landscapeType: {
                type: null
            }
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
            roomTypeText() {
                if (this.roomType === '1') {
                    return this.$t("standard_room")
                }
                if (this.roomType === '2') {
                    return this.$t("deluxe_room")
                }
                if (this.roomType === '3') {
                    return this.$t("suit_room")
                }
                return '-'
            },
            landscapeText() {
                if (this.landscapeType === '1') {
                    return this.$t("sea")
                }
                if (this.landscapeType === '2') {
                    return this.$t("overland")
                }
                return '-'
            }
        },
    }
</script>
