<template>
  <div class="booking">
    <div class="booking__banner">
      <h2 class="booking__banner--text">{{$t('hotel_booking')}}</h2>
    </div>
    <div class="booking__content">
      <el-row>
        <el-col :span="5">
          <div class="stepper">
            <ul>
              <li>
                <el-button class="stepper--link" :class="{'active': currentStep === 1}" @click.prevent="goToStep(1)">1.
                  {{$t('date')}}
                </el-button>
              </li>
              <li>
                <el-button class="stepper--link" :class="{'active': currentStep === 2}" @click.prevent="goToStep(2)">2.
                  {{$t('room')}}
                </el-button>
              </li>
              <li>
                <el-button class="stepper--link" :class="{'active': currentStep === 3}" @click.prevent="goToStep(3)">3.
                  {{$t('payment')}}
                </el-button>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="18">
          <template v-if="currentStep === 1">
            <div class="date__content fade-in">
              <div class="date__content--block">
                <span>{{$t('checkin')}}</span>
                <el-date-picker
                        v-model="checkInDateFormField"
                        type="date"
                        value-format="timestamp"
                        :placeholder="$t('pick_a_day')">
                </el-date-picker>
              </div>
              <div class="date__content--block">
                <span>{{$t('checkout')}}</span>
                <el-date-picker
                        v-model="checkOutDateFormField"
                        type="date"
                        value-format="timestamp"
                        :placeholder="$t('pick_a_day')">
                </el-date-picker>
              </div>
              <div class="date__content--buttons">
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(2)"
                        round
                        :disabled="!checkOutDateFormField || !checkInDateFormField"
                >
                  {{$t('next')}}
                </el-button>
              </div>
            </div>
          </template>
          <template v-if="currentStep === 2">
            <div class="room__content fade-in">
              <InfoBooking :stepper="currentStep"/>
              <article>
                <span class="room__content--title">{{$t('room_type')}}</span>
                <el-radio v-model="roomTypeInputFormField" label="1">{{$t('standard_room')}}</el-radio>
                <el-radio v-model="roomTypeInputFormField" label="2">{{$t('deluxe_room')}}</el-radio>
                <el-radio v-model="roomTypeInputFormField" label="3">{{$t('suit_room')}}</el-radio>
              </article>
              <article>
                <span class="room__content--title">{{$t('landscape')}}</span>
                <el-radio v-model="landscapeInputFormField" label="1">{{$t('sea')}}</el-radio>
                <el-radio v-model="landscapeInputFormField" label="2">{{$t('overland')}}</el-radio>
              </article>
              <div class="date__content--buttons">
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(1)"
                        round
                >
                  {{$t('back')}}
                </el-button>
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(3)"
                        round
                >
                  {{$t('next')}}
                </el-button>
              </div>
            </div>
          </template>
          <template v-if="currentStep === 3">
            <div class="payment__content fade-in">
              <InfoBooking :stepper="currentStep"/>
              <el-form :inline="true">
                <el-form-item :label="$t('name')">
                  <el-input v-model="cardFormNameFormField" placeholder="John Wick"></el-input>
                </el-form-item>
                <el-form-item :label="$t('card_number')">
                  <el-input v-model="cardNumberFormField" maxlength="16" pattern="[0-9]{16}"
                            placeholder="1111999944447777"></el-input>
                </el-form-item>
                <el-form-item :label="$t('security_code')">
                  <el-input v-model="securityFormField" maxlength="4" pattern="[0-9]{4}" placeholder="435"></el-input>
                </el-form-item>
                <el-form-item :label="$t('cvc')">
                  <el-input v-model="cvcFormField" maxlength="3" pattern="[0-9]{3}" placeholder="491"></el-input>
                </el-form-item>
                <el-form-item :label="$t('expiration')">
                  <el-input class="expiration" v-model="expirationMmFormField" maxlength="2" pattern="[0-9]{2}"
                            placeholder="18"></el-input>
                  <el-input class="expiration" v-model="expirationYyFormField" maxlength="2" pattern="[0-9]{2}"
                            placeholder="12"></el-input>
                </el-form-item>
              </el-form>
              <div class="card group">
                <div class="card__front">
                  <input type="text" :value="cardFormNameFormField" :disabled="true" class="card__front--bank-name"/>
                  <div class="card__front--card-num">
                    <input type="text" :value="cardNumberFormField" :disabled="true"/>
                  </div>
                  <input type="text" :value="securityFormField" :disabled="true" class="holder-name"/>
                  <div class="exp-date">
                    <input :value="expirationMmFormField" :disabled="true"/>
                    <input :value="expirationYyFormField" :disabled="true"/>
                  </div>
                  <div class="sign"></div>
                </div>
                <div class="card__back">
                  <div class="card__back--magnet"></div>
                  <input class="inputs" placeholder="CVC" type="text" :value="cvcFormField" :disabled="true"/>
                </div>
              </div>
              <div class="date__content--buttons">
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(2)"
                        round
                >
                  {{$t('back')}}
                </el-button>
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(4)"
                        :disabled="!isFormValid"
                        round
                >
                  {{$t('payment')}}
                </el-button>
              </div>
            </div>
          </template>
          <template v-if="currentStep === 4">
            <div class="success__content fade-in">
              <h1>{{$t('success_msg')}}</h1>
              <div class="date__content--buttons">
                <el-button
                        class="go--book"
                        @click.prevent="goToStep(3)"
                        round
                >
                  {{$t('back')}}
                </el-button>
              </div>
            </div>
          </template>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import fromUnixTime from 'date-fns/fromUnixTime'
  import InfoBooking from '../components/InfoBooking'


export default {
  name: 'Home',
  components: {
    InfoBooking,
  },
  data() {
    return {
      roomTypeInputFormField: null,
      landscapeInputFormField: null,
      checkInDateFormField: null,
      checkOutDateFormField: null,
      cardFormNameFormField: '',
      cardNumberFormField: '',
      securityFormField: '',
      expirationMmFormField: '',
      expirationYyFormField: '',
      cvcFormField: '',
      currentStep: 1,
    };
  },
  mounted() {
    this.rehydrate();
  },
  methods: {
    rehydrate() {
      let persistedFormFields = [
        'roomTypeInputFormField',
        'landscapeInputFormField',
        'checkInDateFormField',
        'checkOutDateFormField',
        'cardFormNameFormField',
        'cardNumberFormField',
        'securityFormField',
        'expirationMmFormField',
        'expirationYyFormField',
        'cvcFormField'
      ];

      for (const formField of persistedFormFields) {
        const persistedValue = localStorage.getItem(formField);
        let fieldValue = persistedValue;
        if (!fieldValue) {
          continue
        }

        if (fieldValue.includes('DateFormfield')) {
          fieldValue = fromUnixTime(fieldValue);
        }
        this.$set(this, formField, fieldValue);
      }
    },
    goToStep(step) {
      this.currentStep = step;
      const formFields = [
        'checkInDateFormField',
        'checkOutDateFormField',
        'roomTypeInputFormField',
        'landscapeInputFormField',
        'cardFormNameFormField',
        'cardNumberFormField',
        'securityFormField',
        'expirationMmFormField',
        'expirationYyFormField',
        'cvcFormField'
      ];

      for (const formField of formFields) {
        if (!formField) {
          continue
        }
        localStorage.setItem(formField, this[formField]);
      }
    },
  },
  computed: {
    isFormValid() {
      return this.cardFormNameFormField &&
              this.cardNumberFormField &&
              this.securityFormField &&
              this.expirationMmFormField &&
              this.expirationYyFormField &&
              this.cvcFormField
    }
  }
}
</script>
