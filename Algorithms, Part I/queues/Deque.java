import java.util.Iterator;

public class Deque<Item> implements Iterable<Item> {

    private Item[] items;
    private int N; // number of items

    private void doubleDeckSize() {
        Item[] newArray = (Item[]) new Object[N * 2];
        if (N >= 0) System.arraycopy(items, 0, newArray, 0, N);
        items = newArray;
    }

    private void halveDeck() {
        Item[] newArr = (Item[]) new Object[items.length / 4];
        if (N >= 0) System.arraycopy(items, 0, newArr, 0, N);
        items = newArr;
    }

    // construct an empty deque
    public Deque() {
        N = 0;
        items = (Item[]) new Object[1];
    }

    // is the deque empty?
    public boolean isEmpty() {
        return N == 0;
    }

    // return the number of items on the deque
    public int size() {
        return N;
    }

    // add the item to the front
    public void addFirst(Item item) {
        if (item == null) {
            throw new IllegalArgumentException("item is null");
        }

        // First item?
        if (items.length == 0) {
            Item[] newArr = (Item[]) new Object[1];
            items = newArr;
        }

        // Double the deck size if needed
        if (items.length == N) {
            doubleDeckSize();
        }

        // Add item to the front
        items[N++] = item;
    }

    // add the item to the back
    public void addLast(Item item) {
        if (item == null) {
            throw new IllegalArgumentException("item is null");
        }

        // First item?
        if (items.length == 0) {
            Item[] newArr = (Item[]) new Object[1];
            items = newArr;
        }

        // Double the deck size if needed
        if (items.length == N) {
            doubleDeckSize();
        }

        // Add item to the back
        Item[] newArray = (Item[]) new Object[items.length];
        newArray[0] = item;
        if (N - 1 >= 0) System.arraycopy(items, 0, newArray, 1, N - 1);
        N++;
        items = newArray;
    }

    // remove and return the item from the front
    public Item removeFirst() {
        if (N == 0) {
            throw new java.util.NoSuchElementException("Empty deque");
        }

        Item item = items[--N];

        // halve the deck?
        if (N < items.length / 4) {
            halveDeck();
        }

        return item;
    }

    // remove and return the item from the back
    public Item removeLast() {
        if (N == 0) {
            throw new java.util.NoSuchElementException("Empty deque");
        }

        Item item = items[0];
        Item[] newArr = (Item[]) new Object[items.length];
        if (N >= 0) System.arraycopy(items, 1, newArr, 0, N);
        items = newArr;
        N--;

        // halve the deck?
        if (N < items.length / 4) {
            halveDeck();
        }

        return item;
    }

    // return an iterator over items in order from front to back
    @Override
    public Iterator<Item> iterator() {
        final Item[] items = this.items;

        return new Iterator<Item>() {

            int index = 0;

            @Override
            public boolean hasNext() {
                return index < items.length;
            }

            @Override
            public Item next() {
                if (hasNext()) {
                    Item value = items[index];
                    index++;
                    return value;
                }
                throw new java.util.NoSuchElementException("No more items available");
            }

            @Override
            public void remove() {
                throw new UnsupportedOperationException("Removals are not supported");
            }
        };
    }

    // unit testing (required)
    public static void main(String[] args) {

        Deque<Integer> d = new Deque<>();
        d.addLast(1);
        d.addLast(2);
        d.addLast(3);
        d.addLast(4);
        d.addLast(5);

        System.out.println(d.removeFirst());
        System.out.println(d.removeFirst());
        System.out.println(d.removeFirst());
        System.out.println(d.removeFirst());
        System.out.println(d.removeFirst());
        System.out.println(d.removeFirst());
    }
}
