export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
  likes: number;
  instagramUrl?: string;
  mediumUrl?: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "The Weight of Silence",
    slug: "the-weight-of-silence",
    excerpt: "In the spaces between words, we find the truest conversations. A reflection on the poetry of unspoken moments.",
    content: `There is a particular kind of silence that settles between two people who have said too much. It's not uncomfortable—not exactly. It's the silence of recognition, of understanding that some things cannot be articulated, no matter how eloquent we become.

I've been thinking about this silence lately. The way it feels like both an ending and a beginning. The way it makes space for something that language cannot touch.

In poetry, we learn to embrace the white space on the page. The gaps between stanzas. The line breaks that force us to pause, to breathe, to consider. Perhaps in life, too, we need these moments of silence—these pauses where meaning can settle and take root.

The Japanese have a word for this: *ma*—the space between things, the pause, the interval. It's considered as important as the sounds themselves. Without *ma*, music would be noise. Without silence, words would be meaningless chatter.

Tonight, as I write this, I'm listening to the silence between raindrops. Each one a small punctuation mark in the night's long sentence. And I'm reminded that sometimes the most profound things we say are the things we don't say at all.`,
    date: "2024-03-15",
    tags: ["poetry", "reflection", "silence"],
    image: "/src/assets/post-1.jpg",
    likes: 42,
    instagramUrl: "https://instagram.com/abhay.anand",
    mediumUrl: "https://medium.com/@abhay.anand"
  },
  {
    id: "2",
    title: "Letters I'll Never Send",
    slug: "letters-ill-never-send",
    excerpt: "On the art of writing for no one but yourself, and why the unsent letter might be the most honest form of communication.",
    content: `Dear Reader,

This is not a letter I will send. This is one of many letters I've written to people I'll never reach, about feelings I'll never quite express, in a voice that only feels true when I know no one is listening.

There's a peculiar freedom in writing letters you'll never send. You can be completely honest. You can say the things that are too raw, too real, too much for actual conversation. You can contradict yourself. You can change your mind mid-sentence. You can be vulnerable without the fear of being seen.

I keep a journal of these unsent letters. Some are to people I've loved. Some are to versions of myself I've left behind. Some are to strangers whose brief intersection with my life left an unexpected mark. Some are to ideas, to places, to moments that have passed but still shimmer in memory.

Sometimes I wonder if all writing is just a form of unsent letters. We write to connect, yes, but we also write to preserve the distance. To say things from a safe remove. To craft our truths in the quiet of our own minds before we risk exposing them to the world.

Virginia Woolf wrote, "I was in a hole and I can't get out." She was talking about depression, but I think about this line whenever I write these letters. We're all in our own holes, calling out to each other across the dark. And maybe the beauty is not in being heard, but in the calling itself.

So here is another unsent letter. Another voice in the dark. Another attempt to make sense of the inexplicable.

With love,
Someone you'll never know`,
    date: "2024-03-08",
    tags: ["essay", "writing", "introspection"],
    image: "/src/assets/post-2.jpg",
    likes: 67,
    instagramUrl: "https://instagram.com/abhay.anand",
    mediumUrl: "https://medium.com/@abhay.anand"
  },
  {
    id: "3",
    title: "Morning Rituals",
    slug: "morning-rituals",
    excerpt: "A poem about the small ceremonies that anchor us to ourselves, and the quiet revolution of choosing to begin again.",
    content: `The alarm doesn't ring—
it whispers.
I've learned to wake gently,
to treat each morning
like a delicate thing
that might break
under too much force.

First: water.
Then: window.
The city still sleeping
in its nest of fog,
and me, the only witness
to its slow unfurling.

Coffee made the same way
every day for years—
the ritual matters more
than the taste.
The grinding of beans,
the patient pour,
the steam rising
like small prayers
to a god I don't believe in
but honor anyway.

Then the notebook.
Three pages, longhand,
whatever comes.
Julia Cameron taught me this—
morning pages, she called them—
but I think of them as
daily exorcisms,
purging the night's strange dreams
and yesterday's regrets
so I can start clean.

Outside, the world is waking.
Cars gathering like thoughts,
lights clicking on in windows,
everyone performing their own
small ceremonies of beginning.

We are all priests
of our own private religions,
blessing the mundane,
making sacred the everyday,
choosing—every morning—
to try again.

And that's the revolution, isn't it?
Not the grand gesture,
but the quiet choice
to show up,
to begin,
to believe—
even for just one more day—
that it matters.`,
    date: "2024-02-28",
    tags: ["poetry", "daily life", "ritual"],
    image: "/src/assets/post-3.jpg",
    likes: 89,
    instagramUrl: "https://instagram.com/abhay.anand",
    mediumUrl: "https://medium.com/@abhay.anand"
  },
  {
    id: "4",
    title: "On Becoming",
    slug: "on-becoming",
    excerpt: "We spend so much time trying to become something. What if we're already enough, already whole, already exactly who we need to be?",
    content: `I used to think growth was linear. That we moved from who we were to who we wanted to be in a straight line, crossing milestones like checkpoints in a race.

But growth isn't linear. It's circular. Spiral. Fractal.

We return to the same lessons again and again, each time understanding them a little differently. We face the same fears, fight the same battles, make the same mistakes—but with new eyes, new tools, new grace.

The caterpillar doesn't become a butterfly. It always was a butterfly. It just needed time to remember.

Maybe that's what becoming is. Not a transformation from one thing to another, but a remembering of what we already are. A slow revelation. A peeling back of layers until we reach the essential self that's been there all along.

I think of how trees grow. Not just up, but down. The roots reaching as deep as the branches reach high. For every inch of visible growth, there's an invisible counterpart underground, anchoring, nourishing, sustaining.

That's what I want. Not just visible success, but deep roots. Not just impressive achievements, but quiet integrity. Not just to become something the world can see, but to be something I can live with.

And maybe that's enough. Maybe becoming isn't about arriving at some distant destination. Maybe it's about being present in the journey. About showing up for the process. About trusting that who we are right now is exactly who we need to be.

So here I am. Still becoming. Still learning. Still unfolding.

And that's exactly as it should be.`,
    date: "2024-02-15",
    tags: ["essay", "growth", "self-discovery"],
    image: "/src/assets/post-4.jpg",
    likes: 103,
    instagramUrl: "https://instagram.com/abhay.anand",
    mediumUrl: "https://medium.com/@abhay.anand"
  }
];
