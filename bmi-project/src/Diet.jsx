import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Supplement.css';

export default function Diet() {
  return (
    <Card sx={{maxWidth:"27vw"} } 
    style={{background:"#e5d1d4",padding:"30px",lineHeight:"2"}} >
    
    
      <CardActionArea>
        <CardMedia/>
       
        <CardContent>
          <Typography variant="body2">
            <div className='Aman'><b>
            <h2 className='A'>Diet for Healthy Person</h2>

 <b> <h3>Breakfast:</h3></b>
<ul>
<li>Greek yogurt parfait with mixed berries and a sprinkle of almonds.</li>
<li>Scrambled eggs with spinach and tomatoes, served with a slice of whole-grain toast.</li>
<li>Protein smoothie made with whey protein powder, almond milk, banana, and peanut butter.</li>
</ul>
<h3>Mid-Morning Snack:</h3>
<ul>
<li>Cottage cheese with pineapple chunks.</li>
<li>Handful of mixed nuts (almonds, walnuts, cashews).</li>
</ul>
<h3>Lunch:</h3>
<ul>
<li>Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, avocado, and balsamic vinaigrette dressing.</li>
<li>Quinoa bowl with black beans, roasted vegetables, and a dollop of Greek yogurt.</li>
<li>Tuna salad sandwich on whole-grain bread with lettuce and tomato.</li>
</ul>
<h3>Afternoon Snack:</h3>
<ul>
<li>Hard-boiled eggs.</li>
<li>Hummus with carrot and cucumber sticks.</li>
</ul>
<h3>Dinner:</h3>
<ul>
<li>Baked salmon with roasted sweet potatoes and steamed broccoli.</li>
<li>Stir-fried tofu with mixed vegetables and brown rice.</li>
</ul>

<h2 className='A'>Diet for Weight gaining Person</h2>

  <h3>Breakfast:</h3>
  <ul>
  <li>Option 1: Oatmeal cooked with whole milk, topped with sliced bananas, nuts, and a drizzle of honey.</li>
  <li>Option 2: Whole-grain toast with avocado spread, scrambled eggs, and a side of Greek yogurt.</li>
  <li>Option 3: Protein smoothie made with whey protein powder, whole milk, frozen berries, spinach, and almond butter.</li>
</ul>
<h3>Mid-Morning Snack:</h3>
<ul>
<li>Option 1: Greek yogurt with granola and mixed berries.</li>
<li>Option 2: Peanut butter sandwich on whole-grain bread.</li>
</ul>
<h3>Lunch:</h3>
<ul>
<li>Option 1: Grilled chicken breast with quinoa, roasted vegetables, and avocado.</li>
<li>Option 2: Lentil soup with whole-grain bread and a side salad with olive oil dressing.</li>
<li>Option 3: Brown rice bowl with black beans, grilled tofu, sautéed spinach, and salsa.</li>
</ul>
<h3>Afternoon Snack:</h3>
<ul>
<li>Option 1: Cottage cheese with pineapple chunks.</li>
<li>Option 2: Hummus with carrot and cucumber sticks.</li>
<li>Option 3: Whole-grain crackers with cheese slices.</li>
</ul>
<h3>Dinner:</h3>
<ul>
<li>Option 1: Baked salmon with sweet potato mash, steamed broccoli, and a side of quinoa.</li>
<li>Option 2: Beef stir-fry with mixed vegetables and brown rice.</li>
<li>Option 3: Chickpea curry with coconut milk, served with brown rice and roasted cauliflower.</li>
</ul>
<h3>Evening Snack (if needed):</h3>
<ul>
<li>Option 1: Smoothie made with whole milk, banana, oats, and protein powder.</li>
<li>Option 2: Avocado toast with tomato slices and a sprinkle of hemp seeds.</li>
<li>Option 3: Greek yogurt with honey and a handful of walnuts.</li>
</ul>

<h2 className='A'>Diet for Fat loss Person</h2>

  <h3>Breakfast:</h3>
<ul>
<li>Option 1: Scrambled eggs with spinach and tomatoes, served with a slice of whole-grain toast.</li>
<li>Option 2: Greek yogurt parfait with mixed berries and a sprinkle of almonds.</li>
<li>Option 3: Overnight oats made with rolled oats, almond milk, chia seeds, and sliced banana.</li>
</ul>
<h3>Mid-Morning Snack:</h3>
<ul>
<li>Option 1: Apple slices with almond butter.</li>
<li>Option 2: Carrot and cucumber sticks with hummus.</li>
<li>Option 3: Low-fat cottage cheese with pineapple chunks.</li>
</ul>
<h3>Lunch:</h3>
<ul>
<li>Option 1: Grilled chicken breast salad with mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette dressing.</li>
<li>Option 2: Quinoa salad with black beans, corn, bell peppers, avocado, and lime vinaigrette.</li>
<li>Option 3: Turkey and vegetable stir-fry with broccoli, bell peppers, and brown rice.</li>
</ul>

<h3>Dinner:</h3>
<ul>
<li>Option 1: Baked salmon with roasted sweet potatoes and steamed broccoli.</li>
<li>Option 2: Lean beef stir-fry with snow peas, carrots, and quinoa.</li>
<li>Option 3: Grilled tofu with sautéed kale, bell peppers, and cauliflower rice</li>
</ul>
</b>
</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}