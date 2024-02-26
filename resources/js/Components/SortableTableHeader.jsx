export default function SortableTableHeader({ className = "", column, title, sortColumn, sortOrder, onSort })
{
    const isSortable = column !== "action";

    return (
        <th
        scope="col"
        className={`px-6 py-3 ${
            isSortable ? "cursor-pointer" : "" }` + className}
        onClick={isSortable ? () => onSort(column) : null}
        >
            {title}{" "}
            {isSortable && sortColumn === column && sortOrder === "asc" && "↑"}
            {isSortable && sortColumn === column && sortOrder === "desc" && "↓"}
        </th>
    );
}
