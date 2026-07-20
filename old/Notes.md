## Notes

# 1. EDA
- Drop First column (Unamed:0) when reading the file. Could be indices.
- `store_ID` : Unique ids of the shop. Hass 1115 unique values. Numerical values could be indicate a relation or order between the stores. Could be dropped but we might loss some information about the shop.
- There are two columns with datatypes str, which need to be converted to numerical type.
  - `state_holiday` is a ctegorical column with 4 categories. One-Hot encoding needed.
- `day_of_week` is a categorical column with ordinal values. We can keep the ordinal values as the days of a week are related and sequence of the days in a week do not change. No change required for this column.
-  Convaert date format into thre columns of year, month and date.
-  No missing values



--- Sales == 0 on open == 0
- Sales id 0 when store is closed.
- drop the rows when sales == 0
- Data cleaning part