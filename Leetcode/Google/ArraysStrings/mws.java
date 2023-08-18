class Solution {
    public String minWindow(String s1, String s2) {
          Map<Character, List<Integer>> indexMap = new HashMap<>();
        // preprocessing
        for (int i = 0; i < s1.length(); ++i) {
            List<Integer> list = indexMap.getOrDefault(s1.charAt(i), new ArrayList<>());
            list.add(i);
            indexMap.put(s1.charAt(i), list);
        }

        int[] minStringDetails = new int[3]; // 0 - startIndex, 1 - endIndex, 2- len
        minStringDetails[2] = Integer.MAX_VALUE;
        
        List<Integer> firstCharList = indexMap.get(s2.charAt(0));
        if (firstCharList == null)
            return "";
        
        for (int i = 0; i < firstCharList.size(); ++i) {
            int index = firstCharList.get(i);
            int startIndex = index;
            int j;
            for (j = 1; j < s2.length(); j++) {
                char c = s2.charAt(j);
                List<Integer> currList = indexMap.get(c);
                if (currList == null) // the s2 char is not present in str1
                    break;

                index = getUpperbound(currList, index);
                if (index >= currList.size())
                    break;
                index = currList.get(index);
            }
            if (j == s2.length()) { // found full subsequence
                if ((index - startIndex + 1) < minStringDetails[2]) {
                    minStringDetails[2] = (index - startIndex + 1);
                    minStringDetails[1] = index;
                    minStringDetails[0] = startIndex;
                }
            }
        }
        if (minStringDetails[2] == Integer.MAX_VALUE)
            return "";
        return s1.substring(minStringDetails[0], minStringDetails[1] +1);
    }
    
    private int getUpperbound(List<Integer> list, int key) {
        int index = Collections.binarySearch(list, key);
        if (index >= 0) {
            return index +1;
        } else {
            return -1 * (index + 1);
        }
    }
}


public class Solution {

  public int coinChange(int[] coins, int amount) {
    return coinChange(0, coins, amount);
  }

  private int coinChange(int idxCoin, int[] coins, int amount) {
    if (amount == 0)
      return 0;
    if (idxCoin < coins.length && amount > 0) {
      int maxVal = amount/coins[idxCoin];
      int minCost = Integer.MAX_VALUE;
      for (int x = 0; x <= maxVal; x++) {
        if (amount >= x * coins[idxCoin]) {
          int res = coinChange(idxCoin + 1, coins, amount - x * coins[idxCoin]);
          if (res != -1)
            minCost = Math.min(minCost, res + x);
        }
      }
      return (minCost == Integer.MAX_VALUE)? -1: minCost;
    }
    return -1;
  }