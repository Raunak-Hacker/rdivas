<template>
  <form class="reviews" @submit.prevent="subReview">
    <hr
      style="height: 1px; border: 0; border-top: 1px solid #ccc; margin-bottom: 1%"
      class="des" v-if="showHr"
    />
    <slot />
    <hr style="height: 1px; border: 0; border-top: 1px solid #ccc" />
    <br />

    <h4 style="text-transform: uppercase; color: black">Write your own Review >></h4>
    <br />

    <h6>Your Rating: {{ star }}</h6>
    <h6 style="margin-top: 1%">Rating</h6>
    <div style="width: 100%">
      <fieldset class="rating">
        <input type="radio" id="star5" name="rating" value="5" v-model="star" />
        <label class="full" for="star5" title="Awesome - 5 stars" />
        <input
          type="radio"
          id="star4half"
          name="rating"
          value="4.5"
          v-model="star"
        /><label class="half" for="star4half" title="Pretty good - 4.5 stars" />
        <input type="radio" id="star4" name="rating" value="4" v-model="star" /><label
          class="full"
          for="star4"
          title="Good - 4 stars"
        />
        <input
          type="radio"
          id="star3half"
          name="rating"
          value="3.5"
          v-model="star"
        /><label class="half" for="star3half" title="Not Bad - 3.5 stars" />
        <input type="radio" id="star3" name="rating" value="3" v-model="star" /><label
          class="full"
          for="star3"
          title="Fair - 3 stars"
        />
        <input
          type="radio"
          id="star2half"
          name="rating"
          value="2.5"
          v-model="star"
        /><label class="half" for="star2half" title="Kinda bad - 2.5 stars" />
        <input type="radio" id="star2" name="rating" value="2" v-model="star" /><label
          class="full"
          for="star2"
          title="bad - 2 stars"
        />
        <input
          type="radio"
          id="star1half"
          name="rating"
          value="1.5"
          v-model="star"
        /><label class="half" for="star1half" title="Meh - 1.5 stars" />
        <input type="radio" id="star1" name="rating" value="1" v-model="star" /><label
          class="full"
          for="star1"
          title="Poor - 1 star"
        />
        <input
          type="radio"
          id="starhalf"
          name="rating"
          value="0.5"
          v-model="star"
        /><label class="half" for="starhalf" title="Very Poor - 0.5 stars" />
      </fieldset>
    </div>
    <small v-if="error" style="color: red">Please select a rating</small>
    <h6 style="margin-top: 1%">Review</h6>
    <textarea name="" id="" cols="30" rows="5" v-model.trim="review" />
    <small v-if="nOrder" style="color: red; margin-top: 1rem"
      >You first need to order this product to add your review</small
    >
    <button type="submit">Add Review</button>
  </form>
</template>

<script>
export default {
  emits: ['get-reviews'],
  props: ["id", 'showHr'],
  data() {
    return {
      star: null,
      review: null,
      error: false,
      nOrder: false,
    };
  },
  watch: {
    star(newVal) {
      this.star = Number(newVal);
      if (newVal) {
        this.error = false;
      }
    },
  },

  methods: {
    async subReview() {
      if (!this.auth) {
        this.$router.push("/login");
        return;
      }
      if (this.star == null) {
        this.error = true;
        return;
      }
      this.error = false;
      let review = {
        productId: this.id,
        rating: Number(this.star),
      };
      if (this.review != null) {
        review.review = this.review;
      }
      const resp = await fetch(this.$store.getters.host + "/user/addreview/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(review),
      });
      const data = await resp.json();
      if (data.status != "success") {
        this.nOrder = true;
      } else{
        this.$emit('getReviews');
      }
      this.review = null;
      this.star = null;
    },
  },
  computed: {
    imgHost() {
      return this.$store.getters.imgHost;
    },
    auth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

.rating {
  border: none;
  float: left;
  /* display: flex; */
}

.rating > input {
  display: none;
}
.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before {
  content: "\f089";
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label {
  color: #ffd700;
} /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label {
  color: #ffed85;
}

.reviews {
  padding: 0 2%;
  font-size: 1.2rem;
  color: rgb(100, 100, 100);
  height: max-content;
  display: flex;
  flex-direction: column;
}

.reviews textarea {
  resize: none;
  border: 1px solid #d6d6d6;
  outline: 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
}
button {
  padding: 0.7rem 1rem;
  margin-right: 2%;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  background-color: rgb(44, 43, 43);
  font-weight: 500;
  color: rgb(223, 223, 223);
  margin-top: 1%;
  width: 20%;
}
@media (max-width: 768px) {
  .des {
    display: none;
  }
  button {
    width: 100%;
  }
  h4 {
    font-size: 1rem;
  }
}
</style>
