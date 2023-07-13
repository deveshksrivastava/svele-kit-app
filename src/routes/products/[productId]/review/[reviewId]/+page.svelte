<script>
  import { page } from '$app/stores';
  const {productId, reviewId} = $page.params;
</script>
<h1>Review {reviewId} for products {productId}</h1>

<!-- http://localhost:5173/products/44/review/300 -->