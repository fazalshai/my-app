<%@ Page Language="C#" AutoEventWireup="true" Debug="true" Codefile="fdk.aspx.cs" Inherits="anyhomework.fdk" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox> 
            <br />
            <br />
            <asp:Button ID="Button1" runat="server" Text="search" OnClick="Button1_Click" BackColor="#666666" ForeColor="White" />&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button2" runat="server" Text="delete" BackColor="#FF3300" ForeColor="Black" OnClick="Button2_Click" />
            </div>
        <div>
            <asp:GridView ID="gridview2" runat="server"></asp:GridView>
        </div>
    </form>
</body>
</html>
